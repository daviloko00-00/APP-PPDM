import { StyleSheet } from "react-native";

export const characterCardStyles = StyleSheet.create({
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
});
