import React, { useCallback, useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { getCharacters } from "../services/api";

const HOUSE_COLORS = {
    Grifinória: "#AE0001",
    Sonserina: "#1A472A",
    Corvinal: "#0E1A40",
    Lufa: "#ECB939",
};
const HOUSE_ACCENT = {
    Grifinória: "#FFD700",
    Sonserina: "#5D8C61",
    Corvinal: "#5B7DB1",
    Lufa: "#ECB939",
};
const ALL_HOUSES = ["Todas", "Grifinória", "Sonserina", "Corvinal", "Lufa"];

//  Componente de card de personagem
function CharacterCard({ character, onPress }) {
    const houseColor = HOUSE_COLORS[character.hogwartsHouse] ?? "#2C2C2C";
    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => onPress(character)}
        >
            <LinearGradient
                colors={[houseColor + "55", "#1B202700"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}
            >
                <Image
                    source={{ uri: character.image }}
                    style={styles.cardImage}
                    resizeMode="contain"
                />
                <View style={styles.cardBody}>
                    <View
                        style={[
                            styles.houseDot,
                            { backgroundColor: houseColor },
                        ]}
                    />
                    <Text style={styles.cardName} numberOfLines={1}>
                        {character.fullName}
                    </Text>
                    <Text style={styles.cardNickname} numberOfLines={1}>
                        {character.hogwartsHouse || "Sem casa"}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}

//  Modal de detalhes do personagem 
function CharacterModal({ character, onClose }) {
    if (!character) return null;
    const houseColor = HOUSE_COLORS[character.hogwartsHouse] ?? "#2C2C2C";
    const accent = HOUSE_ACCENT[character.hogwartsHouse] ?? "#D4AF37";
    return (
        <Modal
            visible={!!character}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    {/* Cabeçalho colorido da casa */}
                    <LinearGradient
                        colors={[houseColor, houseColor + "AA"]}
                        style={styles.modalHeader}
                    >
                        <TouchableOpacity
                            style={styles.closeBtn}
                            onPress={onClose}
                        >
                            <Ionicons name="close" size={22} color="#fff" />
                        </TouchableOpacity>
                        <Image
                            source={{ uri: character.image }}
                            style={styles.modalImage}
                            resizeMode="contain"
                        />
                    </LinearGradient>

                    {/* Conteúdo */}
                    <ScrollView
                        style={styles.modalContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={styles.modalFullName}>
                            {character.fullName}
                        </Text>
                        <View
                            style={[
                                styles.houseBadge,
                                { backgroundColor: houseColor },
                            ]}
                        >
                            <Text style={styles.houseBadgeText}>
                                {character.hogwartsHouse || "Sem casa"}
                            </Text>
                        </View>

                        {/* Infos */}
                        <View style={styles.infoGrid}>
                            <InfoRow
                                icon="person-outline"
                                label="Apelido"
                                value={character.nickname}
                                accent={accent}
                            />
                            <InfoRow
                                icon="film-outline"
                                label="Ator/Atriz"
                                value={character.interpretedBy}
                                accent={accent}
                            />
                            <InfoRow
                                icon="calendar-outline"
                                label="Nascimento"
                                value={character.birthdate}
                                accent={accent}
                            />
                            {character.children?.length > 0 && (
                                <InfoRow
                                    icon="people-outline"
                                    label="Filhos"
                                    value={character.children.join(", ")}
                                    accent={accent}
                                />
                            )}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

function InfoRow({ icon, label, value, accent }) {
    if (!value) return null;
    return (
        <View style={styles.infoRow}>
            <Ionicons name={icon} size={16} color={accent} />
            <View style={styles.infoTextBlock}>
                <Text style={styles.infoLabel}>{label}</Text>
                <Text style={styles.infoValue}>{value}</Text>
            </View>
        </View>
    );
}

//  Tela de Personagens
export default function PersonagensScreen() {
    const [characters, setCharacters] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedHouse, setSelectedHouse] = useState("Todas");
    const [selectedChar, setSelectedChar] = useState(null);
    const PAGE_SIZE = 20;

    //  Busca personagens
    const fetchCharacters = useCallback(
        async (pageNum = 0, append = false) => {
            try {
                const res = await getCharacters(pageNum, PAGE_SIZE);
                const data = res.data;
                setCharacters((prev) =>
                    append ? [...prev, ...data] : data
                );
                setHasMore(data.length === PAGE_SIZE);
            } catch (err) {
                console.error("Erro ao carregar personagens:", err);
            } finally {
                setLoading(false);
                setLoadingMore(false);
            }
        },
        []
    );

    useEffect(() => {
        fetchCharacters(0);
    }, []);

    //  Filtros 
    useEffect(() => {
        let result = [...characters];

        if (selectedHouse !== "Todas") {
            result = result.filter(
                (c) => c.hogwartsHouse === selectedHouse
            );
        }

        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (c) =>
                    c.fullName.toLowerCase().includes(q) ||
                    c.nickname?.toLowerCase().includes(q)
            );
        }

        setFiltered(result);
    }, [characters, search, selectedHouse]);
    //  Paginação 
    const loadMore = () => {
        if (loadingMore || !hasMore) return;
        setLoadingMore(true);
        const nextPage = page + 1;
        setPage(nextPage);
        fetchCharacters(nextPage, true);
    };

    const renderFooter = () => {
        if (!loadingMore) return null;
        return (
            <ActivityIndicator
                style={{ marginVertical: 16 }}
                color="#D4AF37"
            />
        );
    };
    if (loading) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#D4AF37" />
                    <Text style={styles.loadingText}>
                        Invocando personagens…
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            
            <View style={styles.header}>
                <Text style={styles.eyebrow}>HARRY POTTER APP</Text>
                <Text style={styles.title}>Personagens</Text>
            </View>
            <View style={styles.searchContainer}>
                <Ionicons
                    name="search-outline"
                    size={18}
                    color="#D4AF37"
                    style={{ marginRight: 8 }}
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar personagem…"
                    placeholderTextColor="#EAD7BA60"
                    value={search}
                    onChangeText={setSearch}
                    selectionColor="#D4AF37"
                />
                {search.length > 0 && (
                    <TouchableOpacity onPress={() => setSearch("")}>
                        <Ionicons
                            name="close-circle"
                            size={18}
                            color="#EAD7BA80"
                        />
                    </TouchableOpacity>
                )}
            </View>

            {/*  Filtro de Casas */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.houseFilters}
            >
                {ALL_HOUSES.map((house) => {
                    const active = selectedHouse === house;
                    const color =
                        house === "Todas"
                            ? "#D4AF37"
                            : HOUSE_COLORS[house];
                    return (
                        <TouchableOpacity
                            key={house}
                            onPress={() => setSelectedHouse(house)}
                            style={[
                                styles.houseChip,
                                active && {
                                    backgroundColor: color,
                                    borderColor: color,
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.houseChipText,
                                    active && styles.houseChipTextActive,
                                ]}
                            >
                                {house}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            {/*  Contador*/}
            <View style={styles.countRow}>
                <Text style={styles.countText}>
                    {filtered.length} personagen
                    {filtered.length !== 1 ? "s" : ""} encontrado
                    {filtered.length !== 1 ? "s" : ""}
                </Text>
            </View>

            {/*  Grade de Personagens */}
            <FlatList
                data={filtered}
                keyExtractor={(item) => String(item.index)}
                numColumns={2}
                contentContainerStyle={styles.grid}
                columnWrapperStyle={styles.gridRow}
                showsVerticalScrollIndicator={false}
                onEndReached={
                    selectedHouse === "Todas" && !search ? loadMore : null
                }
                onEndReachedThreshold={0.3}
                ListFooterComponent={renderFooter}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons
                            name="search-outline"
                            size={48}
                            color="#D4AF3740"
                        />
                        <Text style={styles.emptyText}>
                            Nenhum personagem encontrado
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <CharacterCard
                        character={item}
                        onPress={setSelectedChar}
                    />
                )}
            />

            {/*  Modal de Detalhes */}
            <CharacterModal
                character={selectedChar}
                onClose={() => setSelectedChar(null)}
            />
        </SafeAreaView>
    );
}

//  Estilos
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#0D1117",
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
    },
    loadingText: {
        fontFamily: "PlusJakartaSans",
        color: "#EAD7BA",
        fontSize: 15,
    },

    //  Cabeçalho
    header: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 12,
    },
    eyebrow: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 11,
        letterSpacing: 2,
        color: "#D4AF37",
        marginBottom: 4,
    },
    title: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 28,
        color: "#EAD7BA",
    },

    //  Busca
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginBottom: 12,
        backgroundColor: "#1B2027",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#D4AF3740",
    },
    searchInput: {
        flex: 1,
        fontFamily: "PlusJakartaSans",
        color: "#EAD7BA",
        fontSize: 14,
    },

    //  Filtros de casa
    houseFilters: {
        paddingHorizontal: 20,
        gap: 8,
        paddingBottom: 4,
    },
    houseChip: {
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#D4AF3770",
        backgroundColor: "transparent",
    },
    houseChipText: {
        fontFamily: "PlusJakartaSansSemiBold",
        fontSize: 12,
        color: "#EAD7BA",
    },
    houseChipTextActive: {
        color: "#fff",
        fontFamily: "PlusJakartaSansBold",
    },

    //  Contador
    countRow: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    countText: {
        fontFamily: "PlusJakartaSans",
        fontSize: 12,
        color: "#EAD7BA60",
    },

    //  Grade
    grid: {
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    gridRow: {
        gap: 10,
        marginBottom: 10,
    },

    //  Card
    card: {
        flex: 1,
        borderRadius: 14,
        overflow: "hidden",
        backgroundColor: "#1B2027",
        borderWidth: 1,
        borderColor: "#D4AF3730",
    },
    cardGradient: {
        padding: 12,
        alignItems: "center",
        gap: 8,
    },
    cardImage: {
        width: "100%",
        height: 130,
        borderRadius: 8,
    },
    cardBody: {
        width: "100%",
        gap: 4,
    },
    houseDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginBottom: 2,
    },
    cardName: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 13,
        color: "#EAD7BA",
        lineHeight: 17,
    },
    cardNickname: {
        fontFamily: "PlusJakartaSans",
        fontSize: 11,
        color: "#EAD7BA70",
    },

    //  Empty
    emptyContainer: {
        alignItems: "center",
        paddingTop: 60,
        gap: 12,
    },
    emptyText: {
        fontFamily: "PlusJakartaSans",
        fontSize: 15,
        color: "#EAD7BA50",
    },

    //  Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: "#00000099",
        justifyContent: "flex-end",
    },
    modalContainer: {
        backgroundColor: "#0D1117",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        maxHeight: "85%",
        overflow: "hidden",
    },
    modalHeader: {
        height: 220,
        alignItems: "center",
        justifyContent: "flex-end",
        position: "relative",
        paddingBottom: 16,
    },
    closeBtn: {
        position: "absolute",
        top: 16,
        right: 16,
        backgroundColor: "#00000040",
        borderRadius: 20,
        padding: 6,
    },
    modalImage: {
        width: 150,
        height: 180,
        borderRadius: 12,
    },
    modalContent: {
        padding: 24,
    },
    modalFullName: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 24,
        color: "#EAD7BA",
        marginBottom: 10,
    },
    houseBadge: {
        alignSelf: "flex-start",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
        marginBottom: 20,
    },
    houseBadgeText: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 12,
        color: "#fff",
    },
    infoGrid: {
        gap: 14,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 12,
    },
    infoTextBlock: {
        flex: 1,
    },
    infoLabel: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 11,
        letterSpacing: 1,
        color: "#EAD7BA50",
        textTransform: "uppercase",
        marginBottom: 2,
    },
    infoValue: {
        fontFamily: "PlusJakartaSans",
        fontSize: 14,
        color: "#EAD7BA",
        lineHeight: 20,
    },
});
