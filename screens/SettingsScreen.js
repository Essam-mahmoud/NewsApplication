import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { EventRegister } from "react-native-event-listeners";

function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handlLanguageToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
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
        <Switch
          value={darkModeEnabled}
          onValueChange={(value) => {
            setDarkModeEnabled(value);
            EventRegister.emit("ChangeTheme", value);
          }}
        />
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
  darkMode: {
    flex: 1,
    backgroundColor: "black",
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
