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
import {feiticosStyle} from "./Feitiços.styles"

function SpellCard({ spell }) {
    return (
        <TouchableOpacity
            style={feiticosStyle.card}
            activeOpacity={0.8}
        >
                <View style={feiticosStyle.cardBody}>
                    <Text style={feiticosStyle.cardName}>
                        {spell.spell}
                    </Text>
                    <Text style={feiticosStyle.cardUse}>
                        {spell.use}
                    </Text>
                </View>
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
            <SafeAreaView style={feiticosStyle.safeArea}>
                <View style={feiticosStyle.loadingContainer}>
                    <ActivityIndicator size="large" color="#D4AF37" />
                    <Text style={feiticosStyle.loadingText}>
                        Invocando feitiços…
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={feiticosStyle.safeArea}>
            
            <View style={feiticosStyle.header}>
                <Text style={feiticosStyle.eyebrow}>HARRY POTTER APP</Text>
                <Text style={feiticosStyle.title}>Feitiços</Text>
            </View>
            <View style={feiticosStyle.searchContainer}>
                <Ionicons
                    name="search-outline"
                    size={18}
                    color="#D4AF37"
                    style={{ marginRight: 8 }}
                />
                <TextInput
                    style={feiticosStyle.searchInput}
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
                numColumns={2}
                contentContainerStyle={feiticosStyle.grid}
                columnWrapperStyle={feiticosStyle.gridRow}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.3}
                ListFooterComponent={renderFooter}
                ListEmptyComponent={
                    <View style={feiticosStyle.emptyContainer}>
                        <Ionicons
                            name="search-outline"
                            size={48}
                            color="#D4AF3740"
                        />
                        <Text style={feiticosStyle.emptyText}>
                            Nenhum feitiço invocado
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <SpellCard
                        spell={item}
                    />
                )}
            />
        </SafeAreaView>
    );
}
