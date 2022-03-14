import React, { useEffect, useState } from "react";
import { demoData } from "../../../data";

import { View, Text } from "react-native";

const HomeDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [detail, setDetail] = useState({});
  useEffect(() => {
    let det = demoData.filter((item) => {
      return item.id === id;
    });
    if (det.length) {
      det.map((d) => setDetail(d));
      //setDetail(det[0]);
    }
  }, []);
  return (
    <View>
      {Object.keys(detail).length > 0 ? (
        <Text style={{ fontWeight: "500" }}>{detail.detail}</Text>
      ) : (
        <Text>No Advert</Text>
      )}
    </View>
  );
};

export default HomeDetailScreen;
