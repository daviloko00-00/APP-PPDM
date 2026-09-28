import React from "react";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { bookCardStyles as styles } from "./BookCard.styles";

/**
 * Card de livro exibido na lista horizontal da Home.
 *
 * @param {{ book: object }} props
 */
function BookCard({ book }) {
    return (
        <View style={styles.bookCard}>
            <Image
                source={{ uri: book.cover }}
                style={styles.bookCover}
                resizeMode="cover"
            />
            <LinearGradient
                colors={["transparent", "#0D1117EE"]}
                style={styles.bookGradient}
            />
            <View style={styles.bookInfo}>
                <Text style={styles.bookNumber}>Livro {book.number}</Text>
                <Text style={styles.bookTitle} numberOfLines={2}>
                    {book.title}
                </Text>
                <View style={styles.bookMeta}>
                    <Ionicons name="book-outline" size={11} color="#D4AF37" />
                    <Text style={styles.bookPages}> {book.pages} pgs</Text>
                </View>
            </View>
        </View>
    );
}

export default BookCard;
