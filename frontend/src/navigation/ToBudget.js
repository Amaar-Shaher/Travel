import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Budget from '../screens/Budget'
import CityInfo from "../screens/CityInfo";

const Stack = createStackNavigator();

const ToBudget = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="Budget" component={Budget} />
    <Stack.Screen name="CityInfo" component={CityInfo} />

  </Stack.Navigator>
);

export default ToBudget;