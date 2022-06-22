import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import App from "../../App";
import { useNavigation } from "@react-navigation/native";
import {useState} from 'react'
import { data } from "../common/Data";

// import CityInfo from "../screens/CityInfo";

export default function CardOfCountry({Data}) {

  const navigation = useNavigation();
  const [country, setCountry] = useState(Data)
  // console.log(Data);
  return (

    
    <>
        <View style={styles.pirantContener}>
          <View style={styles.contaner}>
            <View style={{}}>
              <View>
                <Text style={styles.header}>{Data.countryName}</Text>
              </View>

              <View>

                {Data.city.map(c=>{
                
                  return (<TouchableOpacity onPress={()=> navigation.navigate("CityInfo",{id:c.id})} key={c.id}>
                    <Text style={[styles.subHeader, styles.subContener]} key={c.id}>
                    {c.name}
                    </Text>
                    
                  </TouchableOpacity> )
                })}

              </View>
            </View>
            <View>
              <Image
                style={[styles.imageFrem]}
                // source={require("../images/cost1/saudi.png")}
                source={Data.Image_Flag}
              />
            </View>
          </View>
        </View>
       
    </>
  );
}

const styles = StyleSheet.create({
  pirantContener: {
    height: 290,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    marginTop :6,
    marginBottom:2,
    backgroundColor:"white"
  },

  contaner: {
    display: "flex",
    flexDirection: "row",
    height: 275,
    width: "90%",
    marginTop:20,
    marginBottom: 8,
    borderRadius: 50,
    borderWidth : 0.5,
    borderColor : "#425E6F",

    backgroundColor: "#F0FFFF",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    elevation: 4,
    shadowOpacity: 1,
  },
  imageFrem: {
    width: 130,
    height: 130,
    marginStart: 45,
    marginTop: 6,

    // marginStart: 240,
    borderRadius: 100,
  },
  header: {
    // fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 35,
    marginStart: 15,
    marginTop: 30,
    marginBottom: 15,
  },

  subHeader: {
    fontSize: 25,
    marginStart: 30,
    marginTop: 15,

    textAlign: "center",
  },
  subContener: {
    backgroundColor: "#E0FFFF",
    height: 50,

    width: 160,
    borderRadius: 50,
    marginStart: 10,
    marginTop: 10,
  },
});
