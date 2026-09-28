import { StyleSheet } from "react-native";

export const personagensStyles = StyleSheet.create({
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

    // Cabeçalho
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

    // Barra de busca
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

    // Filtros de casa
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

    // Contador de resultados
    countRow: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    countText: {
        fontFamily: "PlusJakartaSans",
        fontSize: 12,
        color: "#EAD7BA60",
    },

    // Grade
    grid: {
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    gridRow: {
        gap: 10,
        marginBottom: 10,
    },

    // Estado vazio
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
});
