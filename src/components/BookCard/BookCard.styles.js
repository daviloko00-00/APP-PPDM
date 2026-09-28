import { StyleSheet } from "react-native";

export const bookCardStyles = StyleSheet.create({
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
});
