import React from 'react'
import { View, Text } from 'react-native'
import { veryHelpfulMethod } from '@helpers'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  console.log(veryHelpfulMethod());

  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Hello World!</Text>
    <Icon name="check" size={20} color="green" />
  </View>
  )
}

export default App
