import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "../navigation/StackNavigator/HomeStack";

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
