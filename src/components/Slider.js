import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Slider = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
