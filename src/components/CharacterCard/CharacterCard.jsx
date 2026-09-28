import React, { useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HOUSE_COLORS } from "../../constants/houses";
import { characterCardStyles as styles } from "./CharacterCard.styles";

/**
 * Card de personagem exibido na grade da tela de Personagens.
 * Memoizado para evitar re-renders desnecessários no FlatList.
 *
 * @param {{ character: object, onPress: (character: object) => void }} props
 */
const CharacterCard = React.memo(function CharacterCard({ character, onPress }) {
    const houseColor = HOUSE_COLORS[character.hogwartsHouse] ?? "#2C2C2C";

    const handlePress = useCallback(() => {
        onPress(character);
    }, [character, onPress]);

    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={handlePress}
        >
            <LinearGradient
                colors={[houseColor + "55", "#1B202700"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}
            >
                <Image
                    source={{ uri: character.image }}
                    style={styles.cardImage}
                    resizeMode="contain"
                />
                <View style={styles.cardBody}>
                    <View
                        style={[styles.houseDot, { backgroundColor: houseColor }]}
                    />
                    <Text style={styles.cardName} numberOfLines={1}>
                        {character.fullName}
                    </Text>
                    <Text style={styles.cardNickname} numberOfLines={1}>
                        {character.hogwartsHouse || "Sem casa"}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
});

export default CharacterCard;
