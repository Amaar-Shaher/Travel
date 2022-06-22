import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import ToBudget from "./ToBudget";
import Profile from '../screens/Profile'


const Homep = "Home"
const BudgetP = "Budget"
const profileP = "profile"

const Tab = createBottomTabNavigator();

const ToMain = () => (
  <Tab.Navigator 
        
  initialRouteName='Home'
  screenOptions={({route})=> ({
      tabBarIcon: ({focused,color,size}) =>{
          let iconesname
          let rn= route.name

          if (rn === Homep ){
              iconesname = focused ? 'home' : 'home-outline'
          }else if (rn === profileP) {
              iconesname = focused ? 'person' : 'person-outline'
          }else if (rn === BudgetP){
          iconesname = focused ? 'ios-logo-usd' : 'ios-logo-usd'
          }
          
          return <Ionicons name={iconesname} size={size} color={color}/>

      },
      // headerShown: false
  })}
  >
      <Tab.Screen name={Homep} component={HomeScreen} />
      <Tab.Screen name={BudgetP} component={ToBudget} />
      <Tab.Screen name={profileP} component={Profile} />
      




  </Tab.Navigator>

);

export default ToMain;