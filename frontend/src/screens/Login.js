import React, { useState, useContext } from "react";
import { Image, StyleSheet,View } from "react-native";

import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'

import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

import LottieView from "lottie-react-native"

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("username"),
  password: Yup.string().required().min(4).label("Password"),
});

function Login() {

  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handelSubmit = async ({ username, password }) => {
    const result = await authApi.login(username, password);
    console.log('first', result);
    console.log(result.data.access);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data.access);
    authContext.setUser(user);
    authStorage.storeToken(result.data.access);
  };

  return (
    <View style={styles.SoperContener}>
      <Image style={styles.image} source={require("../images/TravelBudget.png")}/>
      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={handelSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          keyboardType="email-address"
          name="username"
          placeholder="username"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry
          name="password"
          placeholder="Password"
          textContentType="password" 
        />
        <SubmitButton title="Login" />
        <View style={styles.AnimationLogin}>
          <LottieView source={require("../images/login.json")} autoPlay/>
        </View>
      </AppForm>
    </View>
  );
}
const Text_styles = StyleSheet.create({
  container:{
      width: 410,
      height: 30,
      fontSize : 20,
      marginStart : 15,
      fontWeight: 'bold',

  },
})

const styles = StyleSheet.create({
  image:{
      width: 385,
      height: 400,
      marginTop:50,
      marginBottom:10,
      marginLeft:3,
      borderRadius:30,

  },
  AnimationLogin : {
    height : 60,
    width : 70,
    marginTop : -93,
    marginStart : 20,
  },
  SoperContener : {
      height : "100%",
      width : "100%",
      backgroundColor : "#F0FEFE"
    }
})

export default Login;
