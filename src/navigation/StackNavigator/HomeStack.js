import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screen/HomeScreen/HomeScreen";
import HomeDetailScreen from "../../screen/HomeScreen/HomeDetailScreen";
const { Navigator, Screen } = createNativeStackNavigator();
// const HomeStack=createNativeStackNavigator()
const HomeStack = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></Screen>
      <Screen
        name="HomeDetail"
        component={HomeDetailScreen}
        options={{ title: "" }}
      ></Screen>
    </Navigator>
  );
};

export default HomeStack;
