import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const ListScreen = () => {
   const friends = [
      { name: 'Friend #1' },
      { name: 'Friend #2' },
      { name: 'Friend #3' },
      { name: 'Friend #4' },
      { name: 'Friend #5' },
      { name: 'Friend #6' },
      { name: 'Friend #7' },
      { name: 'Friend #8' },
      { name: 'Friend #9' },
      { name: 'Friend #10' },
      { name: 'Friend #11' },
      { name: 'Friend #12' },
      { name: 'Friend #13' },
      { name: 'Friend #14' },
      { name: 'Friend #15' },
   ]


   return (
      <FlatList
         showsVerticalScrollIndicator={false}
         keyExtractor={friend => friend.name}
         data={friends}
         renderItem={({ item }) => {
            return <Text style={styles.listText}>{item.name}</Text>
         }}
      />
   )
}

const styles = StyleSheet.create({
   listText: {
      fontSize: 30,
      textAlign: 'center',
      marginVertical: 30
   }
})


export default ListScreen;