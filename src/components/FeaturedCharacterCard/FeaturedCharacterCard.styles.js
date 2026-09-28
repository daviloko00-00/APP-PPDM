import { StyleSheet } from "react-native";

export const featuredCharacterCardStyles = StyleSheet.create({
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
});
