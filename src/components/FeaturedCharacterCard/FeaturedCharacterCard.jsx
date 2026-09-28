import React from "react";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { HOUSE_COLORS } from "../../constants/houses";
import { featuredCharacterCardStyles as styles } from "./FeaturedCharacterCard.styles";

/**
 * Card de destaque exibido na Home com gradiente da cor da casa do personagem.
 *
 * @param {{ character: object }} props
 */
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

export default FeaturedCharacterCard;
