import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PhotoSection from './PhotoSection'

export default class PhotoList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PhotoSection/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
