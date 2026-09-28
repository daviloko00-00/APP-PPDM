import React from "react";
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { HOUSE_ACCENT, HOUSE_COLORS } from "../../constants/houses";
import { characterModalStyles as styles } from "./CharacterModal.styles";

/**
 * Linha de informação reutilizável dentro do modal.
 */
const InfoRow = React.memo(function InfoRow({ icon, label, value, accent }) {
    if (!value) return null;
    return (
        <View style={styles.infoRow}>
            <Ionicons name={icon} size={16} color={accent} />
            <View style={styles.infoTextBlock}>
                <Text style={styles.infoLabel}>{label}</Text>
                <Text style={styles.infoValue}>{value}</Text>
            </View>
        </View>
    );
});

/**
 * Bottom-sheet modal com os detalhes completos de um personagem.
 * Memoizado — só re-renderiza quando `character` muda.
 *
 * @param {{ character: object | null, onClose: () => void }} props
 */
const CharacterModal = React.memo(function CharacterModal({ character, onClose }) {
    const houseColor = character
        ? (HOUSE_COLORS[character.hogwartsHouse] ?? "#2C2C2C")
        : "#2C2C2C";
    const accent = character
        ? (HOUSE_ACCENT[character.hogwartsHouse] ?? "#D4AF37")
        : "#D4AF37";

    return (
        <Modal
            visible={!!character}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    {character && (
                        <>
                            {/* Cabeçalho com cor da casa */}
                            <LinearGradient
                                colors={[houseColor, houseColor + "AA"]}
                                style={styles.modalHeader}
                            >
                                <TouchableOpacity
                                    style={styles.closeBtn}
                                    onPress={onClose}
                                >
                                    <Ionicons name="close" size={22} color="#fff" />
                                </TouchableOpacity>
                                <Image
                                    source={{ uri: character.image }}
                                    style={styles.modalImage}
                                    resizeMode="contain"
                                />
                            </LinearGradient>

                            {/* Detalhes do personagem */}
                            <ScrollView
                                style={styles.modalContent}
                                showsVerticalScrollIndicator={false}
                            >
                                <Text style={styles.modalFullName}>
                                    {character.fullName}
                                </Text>

                                <View
                                    style={[
                                        styles.houseBadge,
                                        { backgroundColor: houseColor },
                                    ]}
                                >
                                    <Text style={styles.houseBadgeText}>
                                        {character.hogwartsHouse || "Sem casa"}
                                    </Text>
                                </View>

                                <View style={styles.infoGrid}>
                                    <InfoRow
                                        icon="person-outline"
                                        label="Apelido"
                                        value={character.nickname}
                                        accent={accent}
                                    />
                                    <InfoRow
                                        icon="film-outline"
                                        label="Ator/Atriz"
                                        value={character.interpretedBy}
                                        accent={accent}
                                    />
                                    <InfoRow
                                        icon="calendar-outline"
                                        label="Nascimento"
                                        value={character.birthdate}
                                        accent={accent}
                                    />
                                    {character.children?.length > 0 && (
                                        <InfoRow
                                            icon="people-outline"
                                            label="Filhos"
                                            value={character.children.join(", ")}
                                            accent={accent}
                                        />
                                    )}
                                </View>
                            </ScrollView>
                        </>
                    )}
                </View>
            </View>
        </Modal>
    );
});

export default CharacterModal;
