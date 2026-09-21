import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import TabNavigator from "./src/components/TabNAvigator";
import {
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";

import {
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";


export default function App() {
    const [fontsLoaded] = useFonts({
        PlayfairDisplay: PlayfairDisplay_400Regular,
        PlayfairDisplayBold: PlayfairDisplay_700Bold,

        PlusJakartaSans: PlusJakartaSans_400Regular,
        PlusJakartaSansMedium: PlusJakartaSans_500Medium,
        PlusJakartaSansSemiBold: PlusJakartaSans_600SemiBold,
        PlusJakartaSansBold: PlusJakartaSans_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}