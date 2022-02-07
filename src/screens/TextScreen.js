import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
   const [password, setPassword] = useState('')

   return (
      <View>
         <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={newValue => setPassword(newValue)}
         />

         <Text>{password}</Text>
         {password.length < 4 ? <Text>Password must be 4 charracters</Text> : null}
      </View>
   );
};

export default TextScreen;

const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: '#c4c4c4',
      margin: 10,
   }

});
