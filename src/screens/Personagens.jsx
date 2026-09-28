import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { HOUSE_COLORS, HOUSE_ACCENT } from "../constants/houses";
import CharacterModal from "../components/CharacterModal/CharacterModal";
import { personagensStyles } from "./Personagens.styles";

import CharacterCard from "../components/CharacterCard/CharacterCard";

const ALL_HOUSES = ["Todas", "Grifinória", "Sonserina", "Corvinal", "Lufa"];
const PAGE_SIZE = 20;



// ─── Linha de info do modal ────────────────────────────────────────────────────
const InfoRow = React.memo(function InfoRow({ icon, label, value, accent }) {
    if (!value) return null;
    return (
        <View style={personagensStyles.infoRow}>
            <Ionicons name={icon} size={16} color={accent} />
            <View style={personagensStyles.infoTextBlock}>
                <Text style={personagensStyles.infoLabel}>{label}</Text>
                <Text style={personagensStyles.infoValue}>{value}</Text>
            </View>
        </View>
    );
});



// ─── Tela de Personagens ──────────────────────────────────────────────────────
export default function PersonagensScreen() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedHouse, setSelectedHouse] = useState("Todas");
    const [selectedChar, setSelectedChar] = useState(null);

    // Busca personagens (sem duplicatas — usa fullName como id único)
    const fetchCharacters = useCallback(async (pageNum = 0, append = false) => {
        try {
            const res = await getCharacters(pageNum, PAGE_SIZE);
            const data = res.data ?? [];
            setCharacters((prev) => {
                if (!append) return data;
                // Evita duplicatas ao paginar
                const existingNames = new Set(prev.map((c) => c.fullName));
                const newItems = data.filter((c) => !existingNames.has(c.fullName));
                return [...prev, ...newItems];
            });
            setHasMore(data.length === PAGE_SIZE);
        } catch (err) {
            console.error("Erro ao carregar personagens:", err);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    }, []);

    useEffect(() => {
        fetchCharacters(0);
    }, [fetchCharacters]);

    // Filtros calculados com useMemo (sem estado derivado separado)
    const filtered = useMemo(() => {
        let result = characters;

        if (selectedHouse !== "Todas") {
            result = result.filter((c) => c.hogwartsHouse === selectedHouse);
        }

        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (c) =>
                    c.fullName.toLowerCase().includes(q) ||
                    c.nickname?.toLowerCase().includes(q)
            );
        }

        return result;
    }, [characters, search, selectedHouse]);

    // Paginação
    const loadMore = useCallback(() => {
        if (loadingMore || !hasMore || selectedHouse !== "Todas" || search) return;
        const nextPage = page + 1;
        setPage(nextPage);
        setLoadingMore(true);
        fetchCharacters(nextPage, true);
    }, [loadingMore, hasMore, selectedHouse, search, page, fetchCharacters]);

    // keyExtractor com chave garantidamente única (fullName + índice da lista)
    const keyExtractor = useCallback(
        (item, index) => `${item.fullName}-${index}`,
        []
    );

    // renderItem memoizado
    const renderItem = useCallback(
        ({ item }) => (
            <CharacterCard character={item} onPress={setSelectedChar} />
        ),
        []
    );

    const renderFooter = useCallback(() => {
        if (!loadingMore) return null;
        return (
            <ActivityIndicator style={{ marginVertical: 16 }} color="#D4AF37" />
        );
    }, [loadingMore]);

    const closeModal = useCallback(() => setSelectedChar(null), []);

    const clearSearch = useCallback(() => setSearch(""), []);

    // ListHeaderComponent — deve ficar ANTES de qualquer early return (Regras dos Hooks)
    const ListHeader = useMemo(() => (
        <View>
            {/* Cabeçalho */}
            <View style={personagensStyles.header}>
                <Text style={personagensStyles.eyebrow}>HARRY POTTER APP</Text>
                <Text style={personagensStyles.title}>Personagens</Text>
            </View>

            {/* Barra de Busca */}
            <View style={personagensStyles.searchContainer}>
                <Ionicons
                    name="search-outline"
                    size={18}
                    color="#D4AF37"
                    style={{ marginRight: 8 }}
                />
                <TextInput
                    style={personagensStyles.searchInput}
                    placeholder="Buscar personagem…"
                    placeholderTextColor="#EAD7BA60"
                    value={search}
                    onChangeText={setSearch}
                    selectionColor="#D4AF37"
                />
                {search.length > 0 && (
                    <TouchableOpacity onPress={clearSearch}>
                        <Ionicons name="close-circle" size={18} color="#EAD7BA80" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Filtro de Casas */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={personagensStyles.houseFilters}
                nestedScrollEnabled
            >
                {ALL_HOUSES.map((house) => {
                    const active = selectedHouse === house;
                    const color =
                        house === "Todas" ? "#D4AF37" : HOUSE_COLORS[house];
                    return (
                        <TouchableOpacity
                            key={house}
                            onPress={() => setSelectedHouse(house)}
                            style={[
                                personagensStyles.houseChip,
                                active && {
                                    backgroundColor: color,
                                    borderColor: color,
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    personagensStyles.houseChipText,
                                    active && personagensStyles.houseChipTextActive,
                                ]}
                            >
                                {house}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            {/* Contador */}
            <View style={personagensStyles.countRow}>
                <Text style={personagensStyles.countText}>
                    {filtered.length} personagen
                    {filtered.length !== 1 ? "s" : ""} encontrado
                    {filtered.length !== 1 ? "s" : ""}
                </Text>
            </View>
        </View>
    ), [search, selectedHouse, filtered.length, clearSearch]);

    // Loading inicial — após todos os hooks
    if (loading) {
        return (
            <SafeAreaView style={personagensStyles.safeArea}>
                <View style={personagensStyles.loadingContainer}>
                    <ActivityIndicator size="large" color="#D4AF37" />
                    <Text style={personagensStyles.loadingText}>Invocando personagens…</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={personagensStyles.safeArea}>
            {/* Grade de Personagens — cabeçalho vive dentro do ListHeaderComponent */}
            <FlatList
                data={filtered}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={personagensStyles.grid}
                columnWrapperStyle={personagensStyles.gridRow}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMore}
                onEndReachedThreshold={0.4}
                ListHeaderComponent={ListHeader}
                ListFooterComponent={renderFooter}
                removeClippedSubviews
                maxToRenderPerBatch={10}
                updateCellsBatchingPeriod={50}
                windowSize={10}
                initialNumToRender={10}
                ListEmptyComponent={
                    <View style={personagensStyles.emptyContainer}>
                        <Ionicons
                            name="search-outline"
                            size={48}
                            color="#D4AF3740"
                        />
                        <Text style={personagensStyles.emptyText}>
                            Nenhum personagem encontrado
                        </Text>
                    </View>
                }
            />

            {/* Modal de Detalhes — fora do FlatList para não ser clippado */}
            <CharacterModal character={selectedChar} onClose={closeModal} />
        </SafeAreaView>
    );
}