import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View style={styles.heading}>
                    <Text style={styles.eyebrow}>
                        HARRY POTTER APP
                    </Text>

                    <Text style={styles.title}>
                        Bem-vindo(a)!!
                    </Text>

                    <Text style={styles.subtitle}>
                        Explore a magia do mundo mágico de Harry Potter
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#0D1117",
    },

    container: {
        flex: 1,
        backgroundColor: "#0D1117",
        padding: 20,
    },

    heading: {
        marginTop: 20,
    },

    eyebrow: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 2,
        color: "#D4AF37",
        marginBottom: 8,
    },

    title: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 30,
        fontWeight: "700",
        color: "#EAD7BA",
    },

    subtitle: {
        fontSize: 16,
        color: "#EAD7BA",
        marginTop: 10,
        lineHeight: 23,
    },
});