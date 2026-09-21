import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.eyebrow}>Harry Potter APP</Text>
                    <Text style={styles.title}>Bem vindo(a)!!</Text>
                    <Text style={styles.subtitle}>Explore a magia do mundo mágico de Harry Potter</Text>

                </View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
        padding: 20,
    },

    header: {
        paddingTop: 20,
        paddingBottom: 20,
    },

    titleScreen: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1E293B",
        textAlign: "center",
    },

    paragraph: {
        fontSize: 18,
        textAlign: "center",
        color: "#64748B",
        marginTop: 20,
    },

    error: {
        fontSize: 18,
        textAlign: "center",
        color: "#b12727",
        marginTop: 20,
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 20,
        elevation: 3,
    },

    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#64748B",
        marginTop: 12,
    },

    value: {
        fontSize: 17,
        color: "#1E293B",
        marginTop: 3,
    },

    safeArea: {
        flex: 1,
        backgroundColor: "#F6F7F8",
    },
});