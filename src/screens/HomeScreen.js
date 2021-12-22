import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
   return (
      <View>
         <Text style={styles.text}>Wassup!</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      textAlign: 'center'
   },
});

export default HomeScreen;
