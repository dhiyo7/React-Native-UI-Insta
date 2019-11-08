import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import PhotoSection from './PhotoSection'

export default class PhotoList extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <PhotoSection/>
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 10
    }
})
