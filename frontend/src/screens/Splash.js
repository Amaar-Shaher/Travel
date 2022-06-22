import React, {useEffect,useState} from "react";
import { StyleSheet, Text, View } from 'react-native'
import LottieView from "lottie-react-native"

function SplashScreen(props) {
    
 const [authLoaded,setAuthLoaded] = useState(false);

 useEffect(()=>{
     setTimeout(
         ()=> {
             setAuthLoaded(true);
         },3000 );
 }

 );
 
 useEffect(() => {
     if (authLoaded){
        props.navigation.replace ('Welcome')

     }
 }, [authLoaded,props.navigation]

 )


return (
    <>
      <View style={style.AnimationContener}>

          <LottieView 
          source={require("../images/splash.json")}
          autoPlay 
          />
      </View>
      <View style={style.AnimationContener}>
        <Text style={style.TextStyle}>Let's Go</Text>
      </View>

    </>
)
}

const style = StyleSheet.create({

    AnimationContener : {

        height : "100%",
        width : "100%",
        marginTop : -100
        
    },

    TextStyle : {
        fontSize : 50,
        fontWeight : "bold" ,
        textAlign : "center"
    }
})

export default SplashScreen;