import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* Ícone decorativo */}
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="sparkles"
                        size={42}
                        color="#D4AF37"
                    />
                </View>

                {/* Título */}
                <Text style={styles.eyebrow}>
                    BEM-VINDO AO
                </Text>

                <Text style={styles.title}>
                    Harry Potter
                </Text>

                <Text style={styles.subtitle}>
                    App
                </Text>

                {/* Descrição */}
                <Text style={styles.description}>
                    Explore o universo mágico de Harry Potter
                    através de personagens, feitiços e outras
                    informações do mundo bruxo.
                </Text>

                {/* Botão principal */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Personagens")}
                    style={styles.buttonWrapper}
                >
                    <LinearGradient
                        colors={["#D4AF37", "#A98220"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.button}
                    >
                        <Ionicons
                            name="sparkles-outline"
                            size={20}
                            color="#0D1117"
                        />

                        <Text style={styles.buttonText}>
                            Explorar magia
                        </Text>

                        <Ionicons
                            name="arrow-forward"
                            size={20}
                            color="#0D1117"
                        />
                    </LinearGradient>
                </TouchableOpacity>

                {/* Indicadores das informações disponíveis */}
                <View style={styles.features}>

                    <View style={styles.feature}>
                        <Ionicons
                            name="people-outline"
                            size={20}
                            color="#D4AF37"
                        />

                        <Text style={styles.featureText}>
                            Personagens
                        </Text>
                    </View>

                    <View style={styles.feature}>
                        <Ionicons
                            name="sparkles-outline"
                            size={20}
                            color="#D4AF37"
                        />

                        <Text style={styles.featureText}>
                            Feitiços
                        </Text>
                    </View>

                </View>

                <Text style={styles.footer}>
                    Dados obtidos através de uma API pública
                    https://hp-api.onrender.com/
                </Text>

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
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 28,
    },

    iconContainer: {
        width: 82,
        height: 82,
        borderRadius: 41,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D4AF3715",
        borderWidth: 1,
        borderColor: "#D4AF3760",
        marginBottom: 28,
    },

    eyebrow: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 11,
        letterSpacing: 3,
        color: "#D4AF37",
        marginBottom: 8,
    },

    title: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 38,
        color: "#F5E6C8",
        textAlign: "center",
    },

    subtitle: {
        fontFamily: "PlayfairDisplayBold",
        fontSize: 26,
        color: "#D4AF37",
        marginTop: -4,
    },

    description: {
        fontFamily: "PlusJakartaSans",
        fontSize: 14,
        lineHeight: 22,
        color: "#F0E4D0",
        textAlign: "center",
        marginTop: 24,
        maxWidth: 330,
    },

    buttonWrapper: {
        width: "100%",
        marginTop: 32,
    },

    button: {
        height: 56,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },

    buttonText: {
        fontFamily: "PlusJakartaSansBold",
        fontSize: 15,
        color: "#0D1117",
    },

    features: {
        flexDirection: "row",
        gap: 28,
        marginTop: 32,
    },

    feature: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
    },

    featureText: {
        fontFamily: "PlusJakartaSansSemiBold",
        fontSize: 12,
        color: "#F0E4D0",
    },

    footer: {
        position: "absolute",
        bottom: 18,
        fontFamily: "PlusJakartaSans",
        fontSize: 10,
        color: "#F0E4D080",
    },
})
