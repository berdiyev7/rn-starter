import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ComponentsScreen = () => {
   return (
      <View>
         <Text style={styles.componentsText}>Components Screen Wussap</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   componentsText: {
      fontSize: 30,
      textAlign: 'center'
   }
})

export default ComponentsScreen;