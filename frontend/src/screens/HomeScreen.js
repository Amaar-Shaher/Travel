import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import images from "../common/Images";
import { useState } from "react";
import { render } from "react-dom";
import LottieView from "lottie-react-native"

export default function HomeScreen() {
  console.log(images.imagePlace)
  return (
    <>
      <View style={styles.SoperContener}>
        <ScrollView>
          <View style={styles.TextContener}>
            <Text style={styles.TextStyle}>Papular Place</Text>
            <View style={styles.AnimationStyle}>
              <LottieView 
                  source={require("../images/placeAnimation.json")}
                  autoPlay 
              />
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.Card}>
              <ScrollView horizontal>

              {images.imagePlace.map((img) => {
                return (
                  <Image
                  style={styles.ImageFrame}
                  
                    source={img}
                    />
                );
              })}
              </ScrollView>
            </View>
          </View>

          <View  style={{
              height: 55,
              width: 140,
              backgroundColor: "white",
              marginStart: 10,
              borderRadius: 10,
              marginTop: 4,
              borderWidth : 1,
              borderColor : "#425E6F"
            }}>
            <Text style={{fontSize : 30,
            fontWeight : "bold",
            marginStart : 50,
            marginTop : 5
            }}>Hotels</Text>

            <View style={{height : 50,
                        width : 50,
                        marginTop : -45,
                        
                        }}>
              <LottieView 
                  source={require("../images/hotelAnimation.json")}
                  autoPlay 
              />
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.Card}>
              <ScrollView horizontal>
              {images.imageHotels.map((img) => {
                return (
                  <Image 
                  style={styles.ImageFrame}
                  source={img}
                  />
                )
              }
              )}

              </ScrollView>

            </View>
          </View>

          <View
            style={{
              height: 50,
              width: 280,
              backgroundColor: "white",
              marginStart: 10,
              borderRadius: 10,
              marginTop: 4,
              borderWidth : 1,
              borderColor : "#425E6F"
            }}
          >
            <Text style={styles.TextStyle}>Cafe & Restaurants</Text>

            <View style={styles.AnimationStyle}>
              <LottieView 
                  source={require("../images/cafeAnimation.json")}
                  autoPlay 
              />
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.Card}>

            <ScrollView  horizontal>
              {images.imageCafe.map((img) => {
                return (
                  <Image 
                  style={styles.ImageFrame}
                  source={img}
                  />
                )
              }
              )}

              </ScrollView>
              {/* <ScrollView horizontal>
                {images.imageCafe.map((img) =>{
                  return (
                    <Image
                    style={styles.ImageFrame}
                    source = {img}
                    />
                  )
                }
                )}
              </ScrollView> */}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: "95%",
    backgroundColor: "white",
    marginStart: 10,
    marginTop: 10,
  },
  Hotels: {
    // backgroundColor:'pink',
    height: 220,
  },
  test1: {
    fontSize: 50,
  },
  Restaurants: {
    // backgroundColor:'gold',
    height: 220,
  },
  test2: {
    fontSize: 50,
  },
  Cafes: {
    // backgroundColor:'red',
    height: 220,
  },
  test3: {
    fontSize: 50,
  },
  browseView: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  to: {
    // backgroundColor:'black'
  },
  browse: {
    fontSize: 20,
  },

  SoperContener: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F0FEFE",
  },
  TextContener: {
    height: 50,
    width: 230,
    backgroundColor: "white",
    marginStart: 10,
    borderRadius: 10,
    marginTop: 4,
    borderWidth : 1,
    borderColor : "#425E6F"
  },
  TextStyle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginStart : 30
  },
  Card: {
    // display: "flex",
    //flexDirection: "row",
    height: 160,
    width: 390,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 50,
    marginStart: 2,

    backgroundColor: "#F0FFFF",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    elevation: 4,
    shadowOpacity: 0.1,
  },
  ImageFrame: {
    height: 155,
    width: 185,
    borderRadius: 50,
    marginStart: 2,
    marginTop: 2,
  },
  AnimationStyle : {
    height : 50,
    width : 50,
    marginTop : -40,
  }
});
