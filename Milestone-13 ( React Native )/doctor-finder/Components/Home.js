import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
      <Text>This is home</Text>
      <TextInput 
      style={{
        height:40,
        borderColor:'gray',
        borderWidth:1
      }}
      defaultValue="Type anything"
      />
      <Button title='Press me!' color='#424242' onPress={e => alert('hello')}/>
    </View>
  )
}