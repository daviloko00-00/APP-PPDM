import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { getBooks, getCharacters } from "../services/api";
import {homeStyles} from "./Home.styles"
import BookCard from "../components/BookCard/BookCard";
import CharacterCard from "../components/CharacterCard/CharacterCard";

// ─── Cores de cada casa ────────────────────────────────────────────────────────
const HOUSE_COLORS = {
    Grifinória: "#AE0001",
    Sonserina: "#1A472A",
    Corvinal: "#0E1A40",
    Lufa: "#ECB939",
};

// ─── Card de Personagem em destaque ───────────────────────────────────────────
function FeaturedCharacterCard({ character }) {
    const houseColor = HOUSE_COLORS[character.hogwartsHouse] ?? "#2C2C2C";

    return (
        <View style={[styles.featuredCard, { borderColor: houseColor }]}>
            <LinearGradient
                colors={[houseColor + "BB", "#0D1117"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.featuredGradient}
            >
                <Image
                    source={{ uri: character.image }}
                    style={styles.featuredImage}
                    resizeMode="contain"
                />
                <View style={styles.featuredInfo}>
                    <Text style={styles.featuredNickname}>
                        {character.nickname}
                    </Text>
                    <Text style={styles.featuredFullName}>
                        {character.fullName}
                    </Text>
                    <View
                        style={[
                            styles.houseBadge,
                            { backgroundColor: houseColor },
                        ]}
                    >
                        <Text style={styles.houseBadgeText}>
                            {character.hogwartsHouse}
                        </Text>
                    </View>
                    <Text style={styles.actorLabel}>
                        <Ionicons name="film-outline" size={12} color="#D4AF37" />{" "}
                        {character.interpretedBy}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}



// ─── Tela Principal ───────────────────────────────────────────────────────────
export default function HomeScreen() {
    const [characters, setCharacters] = useState([]);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [featuredIndex, setFeaturedIndex] = useState(0);

    useEffect(() => {
        async function loadData() {
            try {
                const [charsRes, booksRes] = await Promise.all([
                    getCharacters(0, 10),
                    getBooks(),
                ]);
                setCharacters(charsRes.data);
                setBooks(booksRes.data);
            } catch (err) {
                console.error("Erro ao carregar dados:", err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    // Rotaciona o personagem em destaque a cada 4 s
    useEffect(() => {
        if (characters.length === 0) return;
        const timer = setInterval(() => {
            setFeaturedIndex((prev) => (prev + 1) % characters.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [characters]);

    if (loading) {
        return (
            <SafeAreaView style={homeStyles.safeArea}>
                <View style={homeStyles.loadingContainer}>
                    <ActivityIndicator size="large" color="#D4AF37" />
                    <Text style={homeStyles.loadingText}>Carregando magia…</Text>
                </View>
            </SafeAreaView>
        );
    }

    const featured = characters[featuredIndex];

    return (
        <SafeAreaView style={homeStyles.safeArea}>
            <ScrollView
                style={homeStyles.scroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={homeStyles.container}>
                    <View style={homeStyles.heading}>
                        <Text style={homeStyles.eyebrow}>HARRY POTTER APP</Text>
                        <Text style={homeStyles.title}>Bem-vindo(a)!!</Text>
                        <Text style={homeStyles.subtitle}>
                            Explore a magia do mundo mágico de Harry Potter
                        </Text>
                        <Text style={homeStyles.subtitle}>api utilizada : https://potterapi-fedeperin.vercel.app/pt/</Text>
                    </View>

                    <View style={homeStyles.divider} />

                    <Text style={homeStyles.sectionTitle}>Personagem do Momento</Text>
                    {featured && (
                        <FeaturedCharacterCard character={featured} />
                    )}

                    <View style={homeStyles.dotsRow}>
                        {characters.map((_, i) => (
                            <View
                                key={i}
                                style={[
                                    homeStyles.dot,
                                    i === featuredIndex && homeStyles.dotActive,
                                ]}
                            />
                        ))}
                    </View>

                    <Text style={[homeStyles.sectionTitle, { marginTop: 28 }]}>
                        Principais Livros
                    </Text>
                </View>

                <FlatList
                    data={books}
                    keyExtractor={(item) => String(item.index)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={homeStyles.bookList}
                    renderItem={({ item }) => <BookCard book={item} />}
                />

                <View style={homeStyles.container}>
                    <Text style={[homeStyles.sectionTitle, { marginTop: 8 }]}>
                        O Universo em Números
                    </Text>
                    <View style={homeStyles.statsRow}>
                        <View style={homeStyles.statCard}>
                            <Text style={homeStyles.statNumber}>{books.length}</Text>
                            <Text style={homeStyles.statLabel}>Livros</Text>
                        </View>
                        <View style={homeStyles.statCard}>
                            <Text style={homeStyles.statNumber}>
                                {characters.length}+
                            </Text>
                            <Text style={homeStyles.statLabel}>Personagens</Text>
                        </View>
                        <View style={homeStyles.statCard}>
                            <Text style={styles.statNumber}>4</Text>
                            <Text style={styles.statLabel}>Casas</Text>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                        "É a nossa escolha que mostra o que realmente somos,
                            muito mais do que nossas habilidades."
                        </Text>
                        <Text style={styles.footerAuthor}>— Alvo Dumbledore</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// ─── Estilos ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#0D1117",
    },
    scroll: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 20,
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

    // ── Cabeçalho ─────────────────────────────────────────────────────────────
    heading: {
        marginTop: 20,
        marginBottom: 4,
    },
    eyebrow: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 2,
        color: "#D4AF37",
        marginBottom: 8,
    },
    title: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 30,
        fontWeight: "700",
        color: "#EAD7BA",
    },
    subtitle: {
        fontFamily: "PlusJakartaSans",
        fontSize: 16,
        color: "#EAD7BA",
        marginTop: 10,
        lineHeight: 23,
        opacity: 0.8,
    },
    divider: {
        height: 1,
        backgroundColor: "#D4AF3740",
        marginVertical: 24,
    },

    // ── Seções ────────────────────────────────────────────────────────────────
    sectionTitle: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 18,
        color: "#EAD7BA",
        marginBottom: 16,
    },

    // ── Card em destaque ──────────────────────────────────────────────────────
    featuredCard: {
        borderRadius: 16,
        borderWidth: 1.5,
        overflow: "hidden",
    },
    featuredGradient: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        gap: 16,
    },
    featuredImage: {
        width: 110,
        height: 150,
        borderRadius: 10,
    },
    featuredInfo: {
        flex: 1,
        gap: 6,
    },
    featuredNickname: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 12,
        letterSpacing: 1.5,
        color: "#D4AF37",
        textTransform: "uppercase",
    },
    featuredFullName: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 20,
        color: "#EAD7BA",
        lineHeight: 26,
    },
    houseBadge: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
        marginTop: 2,
    },
    houseBadgeText: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 11,
        color: "#fff",
        fontWeight: "700",
    },
    actorLabel: {
        fontFamily: "PlusJakartaSans",
        fontSize: 12,
        color: "#EAD7BA",
        opacity: 0.75,
        marginTop: 4,
    },

    // ── Dots ──────────────────────────────────────────────────────────────────
    dotsRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 6,
        marginTop: 12,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#EAD7BA40",
    },
    dotActive: {
        backgroundColor: "#D4AF37",
        width: 18,
    },

    // ── Lista de Livros ───────────────────────────────────────────────────────
    bookList: {
        paddingHorizontal: 20,
        paddingBottom: 8,
        gap: 12,
    },
    bookCard: {
        width: 130,
        height: 195,
        borderRadius: 12,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#D4AF3740",
    },
    bookCover: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    bookGradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "55%",
    },
    bookInfo: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
    },
    bookNumber: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 10,
        color: "#D4AF37",
        letterSpacing: 1,
        textTransform: "uppercase",
    },
    bookTitle: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 11,
        color: "#EAD7BA",
        lineHeight: 14,
        marginTop: 2,
    },
    bookMeta: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    bookPages: {
        fontFamily: "PlusJakartaSans",
        fontSize: 10,
        color: "#D4AF37",
    },

    // ── Estatísticas ─────────────────────────────────────────────────────────
    statsRow: {
        flexDirection: "row",
        gap: 12,
    },
    statCard: {
        flex: 1,
        backgroundColor: "#1B2027",
        borderRadius: 12,
        paddingVertical: 18,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D4AF3740",
    },
    statNumber: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 28,
        color: "#D4AF37",
        fontWeight: "700",
    },
    statLabel: {
        fontFamily: "PlusJakartaSans",
        fontSize: 12,
        color: "#EAD7BA",
        marginTop: 4,
        opacity: 0.8,
    },

    // ── Rodapé ────────────────────────────────────────────────────────────────
    footer: {
        marginTop: 32,
        marginBottom: 20,
        padding: 20,
        backgroundColor: "#1B2027",
        borderRadius: 16,
        borderLeftWidth: 3,
        borderLeftColor: "#D4AF37",
    },
    footerText: {
        fontFamily: "PlusJakartaSans",
        fontSize: 14,
        color: "#EAD7BA",
        lineHeight: 22,
        fontStyle: "italic",
    },
    footerAuthor: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 12,
        color: "#D4AF37",
        marginTop: 8,
        textAlign: "right",
    },
});