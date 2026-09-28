import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
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

    // Cabeçalho
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

    // Seções
    sectionTitle: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 18,
        color: "#EAD7BA",
        marginBottom: 16,
    },

    // Dots (indicadores do carrossel)
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

    // Lista de Livros
    bookList: {
        paddingHorizontal: 20,
        paddingBottom: 8,
        gap: 12,
    },

    // Estatísticas
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

    // Rodapé com citação
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
