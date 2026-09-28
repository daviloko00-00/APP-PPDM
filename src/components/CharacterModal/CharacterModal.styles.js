import { StyleSheet } from "react-native";

export const characterModalStyles = StyleSheet.create({
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
