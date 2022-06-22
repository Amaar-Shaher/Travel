import React, { useState, useContext } from "react";
import { Image, StyleSheet,View } from "react-native";
import LottieView from "lottie-react-native"

import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import useApi from '../hooks/useApi'
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import ErrorMessages from "../components/forms/ErrorMessages";
import SubmitButton from "../components/forms/SubmitButton";




const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Register() {
  
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const [error, setError] = useState();
  const authContext = useContext(AuthContext);

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data)
        setError(
          result.data.username || result.data.email || result.data.password
        );
      else {
        setError("An unexpected error occurred.");
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.username,
      userInfo.password,
      
    );

    const user = jwtDecode(authToken.access);
    authContext.setUser(user);
    authStorage.storeToken(authToken.access);
  };

  return (
    <>
      <View style={Text_styles.SoperContener}>
        <Image style={styles.logo} source={require("../images/TravelBudget.png")} />

        <AppForm
          initialValues={{ username: "", email: "", password: "",re_password:"",first_name:"",last_name:"" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
            <ErrorMessages error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="username"
            placeholder="User Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password2"
            placeholder="Re Password"
            secureTextEntry
            textContentType="password"
          />

          <SubmitButton title="Register" />
          <View style={Text_styles.AnimationSignup}>

            <LottieView 
              source={require("../images/signup.json")}
              autoPlay 
            />
</View>
        </AppForm>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: "97%",
    height: 400,
    alignSelf: "center",
    marginTop:30,
    marginBottom: 10,
    borderRadius:30,

  },
});

const Text_styles = StyleSheet.create({
  container:{
      width: 410,
      height: 30,
      fontSize : 20,
      marginStart : 30,
      marginTop : 45,
      fontWeight: 'bold',
      

  },

  AnimationSignup : {
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

export default Register;
