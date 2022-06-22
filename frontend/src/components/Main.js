import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import Budget from '../screens/Budget'
import Profile from '../screens/Profile'
import Favorite from '../screens/Favorite'

const Homep = "Home"
const searchP = "Budget"
const profileP = "profile"
const Favorites = 'Favorites'

const Tab = createBottomTabNavigator()

export default function Main() {
  return (
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
                }else if (rn === searchP){
                iconesname = focused ? 'ios-logo-usd' : 'ios-logo-usd'
                }else if (rn === Favorites){
                    iconesname = focused ? 'heart' : 'heart-outline'
                }
                return <Ionicons name={iconesname} size={size} color={color}/>

            },
            // headerShown: false
        })}
        >
            <Tab.Screen name={Homep} component={HomeScreen} />
            <Tab.Screen name={searchP} component={Budget} />
            <Tab.Screen name={Favorites} component={Favorite} />
            <Tab.Screen name={profileP} component={Profile} />
            




        </Tab.Navigator>

  )
}