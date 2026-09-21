import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
// import PersonagensScreen from "../screens/PersonagensScreen";
// import FeiticosScreen from "../screens/FeiticosScreen";
// import HogwartsScreen from "../screens/HogwartsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarStyle: {
                    backgroundColor: "#1B2027",
                    borderTopWidth: 1,
                    borderTopColor: "#EAD7BA",
                    height: 70,
                    paddingBottom: 8,
                    paddingTop: 6,
                },

                tabBarActiveTintColor: "#D4AF37",
                tabBarInactiveTintColor: "#EAD7BA",

                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: "600",
                },

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Início") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Personagens") {
                        iconName = focused
                            ? "people"
                            : "people-outline";
                    } else if (route.name === "Feitiços") {
                        iconName = focused
                            ? "sparkles"
                            : "sparkles-outline";
                    } else if (route.name === "Hogwarts") {
                        iconName = focused
                            ? "school"
                            : "school-outline";
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Início"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Personagens"
                component={PersonagensScreen}
            />

            <Tab.Screen
                name="Feitiços"
                component={FeiticosScreen}
            />

            <Tab.Screen
                name="Hogwarts"
                component={HogwartsScreen}
            />
        </Tab.Navigator>
    );
}