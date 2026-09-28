import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect, useCallback } from 'react';
import { getSpells } from '../services/api';

function SpellCard({ spell }) {
    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
        >


            <View style={styles.cardBody}>
                <Text style={styles.cardLabel}>
                    FEITIÇO
                </Text>

                <Text style={styles.cardName}>
                    {spell.spell}
                </Text>

                <View style={styles.divider} />

                <Text style={styles.useLabel}>
                    Efeito
                </Text>

                <Text style={styles.cardUse}>
                    {spell.use}
                </Text>
            </View>

            <Ionicons
                name="chevron-forward"
                size={18}
                color="#D4AF3760"
                style={styles.arrow}
            />
        </TouchableOpacity>
    );
}

export default function SpellScreen() {
    const [spells, setSpells] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState("");

    const PAGE_SIZE = 20;

    const fetchSpells = useCallback(
        async (pageNum = 0, append = false) => {
            try {
                const res = await getSpells(pageNum, PAGE_SIZE);
                const data = res.data;
                setSpells((prev) =>
                    append ? [...prev, ...data] : data
                );
                setHasMore(data.length === PAGE_SIZE);
            } catch (err) {
                console.error("Erro ao carregar feitiços:", err);
            } finally {
                setLoading(false);
                setLoadingMore(false);
            }
        },
        []
    );

    useEffect(() => {
        fetchSpells(0);
    }, []);

    //  Filtros 
    useEffect(() => {
        let result = [...spells];

        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (s) =>
                    s.spell.toLowerCase().includes(q) ||
                    s.use?.toLowerCase().includes(q)
            );
        }

        setFiltered(result);
    }, [spells, search]);
    //  Paginação 
    const loadMore = () => {
        if (loadingMore || !hasMore) return;
        setLoadingMore(true);
        const nextPage = page + 1;
        setPage(nextPage);
        fetchSpells(nextPage, true);
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
                        Invocando feitiços…
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.header}>
                <Text style={styles.eyebrow}>HARRY POTTER APP</Text>
                <Text style={styles.title}>Feitiços</Text>
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
                    placeholder="Buscar Feitiço…"
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

            <FlatList
                data={filtered}
                keyExtractor={(item) => String(item.index)}
                contentContainerStyle={styles.grid}
                showsVerticalScrollIndicator={false}
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
                            Nenhum feitiço invocado
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <SpellCard spell={item} />
                )}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    useLabel: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "#D4AF37",
        marginBottom: 4,
    },

    cardLabel: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "#D4AF37",
        marginBottom: 4,
    },

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
        paddingHorizontal: 6,
        paddingBottom: 30,
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
    cardUse: {
        fontFamily: "PlusJakartaSans",
        fontSize: 11,
        color: "#fff",
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
