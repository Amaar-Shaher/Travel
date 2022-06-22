import 
{StyleSheet, View, Text,Image,TouchableOpacity }
from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"
import colors from '../config/colors'

export default function Welcome({navigation}) {
  return (
    <>
    <View style={styles.SoperContener}>
    <View style={styles.container}>
          <Text style={styles.header}>Welcome !</Text>
          <View style={styles.imageView}>
              <Image style={styles.image} source={require("../images/TravelBudget.png")}/>
          </View>


          <TouchableOpacity 
            onPress={()=>navigation.navigate("Login")}
            style={styles2.button}
          >
                <Text style={styles2.text}> Login</Text>
          </TouchableOpacity>
          <View style={styles.AnimationLogin}>

             <LottieView source={require("../images/login.json")} autoPlay />
          </View>

 

          <TouchableOpacity 
            onPress={()=>navigation.navigate("Register")}
            style={styles2.button}
          >
                <Text style={styles2.text}> Register</Text>
          </TouchableOpacity>
          

          <View style={styles.AnimationSignup}>

            <LottieView 
              source={require("../images/signup.json")}
              autoPlay 
            />
          </View>

    </View>

    </View>

    </>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        marginHorizontal:1,
        backgroundColor : require("../images/travelimage.jpg"),
        backgroundColor : "#F0FEFE"

         
    },
    header2:{
      fontSize:35,
      fontWeight: 'bold',
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      
    },
    header:{
        fontSize:30,
        paddingHorizontal: 130,
        paddingVertical: 10


        
    },
    imageView:{
    },
    image:{
      width: 385,
      height: 400,
      marginTop:30,
      marginLeft:3,
      marginRight:4,
      borderRadius:30,


    },

    AnimationLogin : {
      height : 60,
      width : 70,
      marginTop : -93,
      marginStart : 20,
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

const styles2 = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginLeft: 90,
    marginRight: 50,
    marginVertical: 30,
  },
  text: {
    fontSize:35,
        textAlign: "center",
        fontFamily: "serif",
    fontWeight: "bold",
    
  },
});