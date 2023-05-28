import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { EventRegister } from "react-native-event-listeners";
import { useState, useEffect } from "react";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NewsDetailsScreen from "./screens/NewsDetailsScreen";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function NewsBottomTabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name="News"
        component={HomeScreen}
        options={{
          title: "News",
          tabBarLabel: "News",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeTabs"
            component={NewsBottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NewsDetails"
            component={NewsDetailsScreen}
            options={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
