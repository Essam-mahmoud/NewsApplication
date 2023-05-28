import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, useColorScheme } from "react-native";

function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handlLanguageToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Language</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handlLanguageToggle}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={handleDarkModeToggle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
});

export default SettingsScreen;
