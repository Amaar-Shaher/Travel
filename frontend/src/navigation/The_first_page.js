import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from '../screens/Splash'
import Welcome from '../screens/Welcome'
import Login from "../screens/Login";
import Register from '../screens/Register'

const Stack = createStackNavigator();


export default function The_first_page() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen name="Splash"component={Splash}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      
    </Stack.Navigator>

    
  )
}