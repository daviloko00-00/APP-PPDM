import { StyleSheet } from "react-native";

const feiticosStyle = StyleSheet.create({
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
