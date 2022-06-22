import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Myvisits() {
  return (
    <View style={styles.Backend}>
      <Text>It will be completed in backend stack</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Backend: {
    flex :1,
    alignItems: "center",
    justifyContent: 'center'
  }
})