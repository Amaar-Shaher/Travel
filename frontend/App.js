import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'

import The_first_page from './src/navigation/The_first_page';
import ToMain from './src/navigation/ToMain';

// **********************************

import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

import navigationTheme from "./src/navigation/navigationTheme";
import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";






export default function App() {

  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
    setToken(token);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (

    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <ToMain /> : <The_first_page />}  


        </NavigationContainer>



    </AuthContext.Provider>

   );
 }