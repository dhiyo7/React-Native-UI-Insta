import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Heading from './components/Heading'

export class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Heading/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

export default App
