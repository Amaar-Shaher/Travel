import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View,Image } from 'react-native'
// import APi from "../components/APi";

import { ScrollView } from "react-native-gesture-handler";
import { clearWarnings } from "react-native/Libraries/LogBox/Data/LogBoxData";
export default function CityInfo(props){
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const id = props.route.params.id;
  // console.log(props.route.params.id);

  
  // const myApi = 
  useEffect(() => {
    const getData = async()=>{

      
     await fetch(`https://4cc9-77-232-122-81.in.ngrok.io/travel/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }
    console.log(data);
    getData()
  }, []);

  
    return (
        <>
    <ScrollView>
        <View style={styles.pirantContener}>

            <View style={styles.contaner}>
                
                <View style={styles.subContener}>
                    <Text style={styles.header}> {data.city_name}  </Text>

                </View>

                <View>
                    <Image 
                style={[styles.imageFremForName]}
                 source={{uri:data.image}}/>
                </View>

                <View style={styles.subContenerDes}>
                    <Text style={styles.subHeader}>{data.city_desc}</Text>

                </View>
            </View> 
{/* ========================================================================= */}
            <View style={styles.contaner}>
                <View style={styles.subContener}>
                    <Text style={styles.header}>Papular Places</Text>

                </View>

                <View>
                    <Image 
                style={[styles.imageFrem]}
                source={{ uri:data.imageC}}/>
                </View>

                {/* <View style={styles.subContenerDes}>
                    <Text style={styles.subHeader}>cd</Text>

                </View> */}
            </View> 


            {/* ============================================================================= */}

            <View style={styles.contaner}>
                <View style={styles.subContener}>
                    <Text style={styles.header}>Hotels</Text>

                </View>

                <View>
                    <Image 
                style={[styles.imageFrem]}
                 source={{uri:data.imageH}}/>
                </View>

                
            </View> 
{/* ============================================================================= */}

            <View style={styles.contaner}>
                <View style={styles.subContener}>
                    <Text style={styles.header}>Cafe & Restaurant</Text>

                </View>

                <View>
                    <Image 
                  style={[styles.imageFrem]}
                  source={{uri:data.imageR}}
                 />
                </View>

               
            </View> 




        </View>
    </ScrollView>
        </>
    )
}



const styles = StyleSheet.create({
    pirantContener: {
      height: "95%",
      width: 400,
      justifyContent: "center",
      alignItems: "center",
      marginTop :70,
      marginBottom:2,
      
      //backgroundColor:require("../images/travelimage.jpg")
    },
  
    contaner: {
      //display: "flex",
      //flexDirection: "row",
      height: 750,
      width: "90%",
      
      
      borderRadius: 50,
      marginTop : 6,
        marginBottom : 2,
      backgroundColor: "#F0FFFF",
      shadowColor: "black",
      shadowOffset: { width: 5, height: 5 },
      elevation: 4,
      shadowOpacity: 1,
    },
    imageFremForName: {
      width: 355,
      height: 500,
      marginStart: 2,
      
      marginTop: 4,
  
      // marginStart: 240,
      borderRadius: 80,
    },
    header: {
      // fontFamily: "serif",
      fontWeight: "bold",
      fontSize: 30,
    //   marginStart: 15,
    //   marginTop: 30,
    //   marginBottom: 15,
      textAlign : "center"
    },
  
    subHeader: {
      fontSize: 15,
    //   marginStart: 30,
    //   marginTop: 15,
  
      textAlign: "center",
    },
    subContener: {
      backgroundColor: "#E0FFFF",
      height: 50,
      
  
      width: 250,
      borderRadius: 50,
      marginStart: "16%",
      marginTop: 10,
    },


    subContenerDes: {
        backgroundColor: "#E0FFFF",
        height: 150,    
        width: 350,
        borderRadius: 30,
        marginStart: "1.5%",
        marginTop: 25,
      },

      imageFrem: {
        width: 355,
        height: 650,
        marginStart: 2,
        
        marginTop: 10,
    
        // marginStart: 240,
        borderRadius: 80,
      }
  });