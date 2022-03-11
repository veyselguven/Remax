import React from "react";
import { View, Text, FlatList } from "react-native";
import { demoData } from "../../../data";
import styles from "./style";
import Slider from "../../components/Slider";
/* flat list dioki bana dongu ile iceride gostercegim seyleri ver */
const HomeScreen = () => {
  const renderItem = ({ item }) => {
    return <Slider item={item} />;
  };
  // flatList like map function
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={demoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;