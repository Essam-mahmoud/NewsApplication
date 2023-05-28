import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, useColorScheme } from "react-native";

function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const colorScheme = useColorScheme();

  const handleToggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#1c1c1e" : "#fff" },
      ]}
    >
      <View style={styles.section}>
        <Text
          style={[
            styles.sectionSubtitle,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          Appearance
        </Text>
        <View style={styles.switchContainer}>
          <Text
            style={[
              styles.switchLabel,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={handleToggleSwitch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchLabel: {
    marginRight: 10,
  },
});

export default SettingsScreen;
