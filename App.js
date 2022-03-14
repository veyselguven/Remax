import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppNavigationContainer from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigationContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
