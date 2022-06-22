import { View, Text,StyleSheet,Image,TouchableHighlight,TouchableOpacity } from 'react-native'
import Swipeable from "react-native-gesture-handler/Swipeable";

import React, { useEffect, useContext, useState } from "react";

//********************************** */

import userApi from "../api/user";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";




export default function Profile() {
  
  const { user, setUser } = useContext(AuthContext);
  const [profile, setProfile] = useState();
  const handelLogOut = () => {
    setUser(null);
    authStorage.removeToken();
  };
  const getProfile = async () => {
    const result = await userApi.profile();
    setProfile(result.data);
  };

  useEffect(() => {
    getProfile();
  }, []);
  
  
  return (
<>
    <View style={styles.SoperContener}>
    <TouchableOpacity  onPress={handelLogOut}>
  <View >
  <Image style={{height:50,width:50}}
       source={require("../images/logout.png")}
      />
     <Text> Log Out</Text>
  </View>
  </TouchableOpacity>
    <View style={styles.continer}>
     <Image style={styles.ImageStyle}
     source={require("../images/profile.png")} />
    </View>

    <View style={styles.SubContiner}>
      <View style={styles.TextContiner}>
        <Text style={styles.TextStyle}>Amaar Shaher</Text>
      </View>
      <View style={styles.TextContiner}>
      <Text style={styles.TextStyle}>Epnshaher10@gmail.com</Text>
      </View>

    </View>
    </View>
</>
  )
}

const styles = StyleSheet.create({
continer :{
  
  height : 310,
  width : "80%",
  marginTop : 30,
  marginStart : 40,
  //backgroundColor: "white"
},

ImageStyle :{
  height : 300,
  width : 300,
  marginHorizontal : 7,
  marginVertical : 50,
  borderRadius : 400,
},

SubContiner : {
height : 150,
width : "80%",
marginVertical : 50,

//backgroundColor : "white",
marginStart : 40

},
TextContiner : {
  height : 40,
  width : "90%",
  backgroundColor : "white",
  marginTop : 3,
  marginBottom : 3,
  marginHorizontal : 15,
  borderRadius : 10
},
TextStyle : {
  fontSize : 20,
  fontFamily : "serif",
  fontWeight : "bold",
  textAlign : "center",
  marginTop : 2
  
},
ImageLogout : {
  height : 50,
  width : 50,
  marginTop : -460,
  marginStart : 285
},

SoperContener : {
  height : "100%",
  width : "100%",
  backgroundColor : "#F0FEFE"
}

})