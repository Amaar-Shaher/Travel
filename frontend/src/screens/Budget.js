import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import CardOfCountry from "../components/CardOfCountry";
import { data } from "../common/Data";
import { ScrollView } from "react-native-gesture-handler";
import Categoryitem from "../components/Categoryitem";
import { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();




export default function Search({navigation}) {


  const [term, setTerm] = useState("The first package");
  const [cost, setCost] = useState([]);
  const [choosenValue, setChoosenValue] = useState(null)
  const [filterData, setFilterData] = useState(data)

  useEffect(() => {
      let p = 5000
      let c = []
      for(p; p<=50000; p=p+5000){
          c.push(p)
          
      }
      setCost(c)
}, [])

useEffect(() => {
  let i = data.filter(i=> i.cost === choosenValue)
  setFilterData(i)
}, [choosenValue])


  return (
    <>
    <View style={styles.SoperContener}>
    <View style={styles.container}>
      <Text style={styles.Header}>Chose your budget </Text>
      <ScrollView horizontal >
       

      {cost.map(value=>{
        return <Categoryitem value={value} setChoosenValue={setChoosenValue}/>
       
      })}
      
      
      </ScrollView>

      <ScrollView style={{height : 460}}>
        {filterData.map((country) => {
          return <CardOfCountry Data={country} key={country.countryName} />;
        })}
      </ScrollView>
    </View>

    </View>

    </>
  );
}
const devWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  Header: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 1,
    marginBottom: 5,
  },
  container: {
    paddingTop: 2,
    backgroundColor: "#E0FFFF",
    height : "100%",
    width : "100%"
    
  },
  container1: {
    width: devWidth - 7,
    marginLeft: 4,
    backgroundColor: "#a29bfe",
    height: 250,
    marginTop: 30,
    borderRadius: 50,
    flexDirection: "row",
  },

  Text1: {
    fontSize: 50,
    marginLeft: 15,
    marginTop: 10,
    height: 80,
    width: 280,
  },

  imageContainer: {
    backgroundColor: "gold",
    height: 100,
    width: 100,
    borderRadius: 40,
  },
  image1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 5,
  },

  container2: {
    width: devWidth - 7,
    marginLeft: 4,
    backgroundColor: "#a29bfe",
    height: 250,
    marginTop: 30,
    borderRadius: 50,
    flexDirection: "row",
  },

  Text2: {
    fontSize: 50,
    marginLeft: 15,
    marginTop: 10,
    // backgroundColor:'red',
    height: 80,
    width: 280,
  },

  image2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 5,
  },
  SoperContener : {
    height : "100%",
    width : "100%",
    backgroundColor : "black"
  }
});
