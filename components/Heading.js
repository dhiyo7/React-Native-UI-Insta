import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Heading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> InstaGeram </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth:2
    },
    text:{
        fontSize:19,
        fontWeight:'bold',
        textAlign:'center',
        margin: 13
    }
});

export default Heading