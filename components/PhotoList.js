import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import PhotoSection from './PhotoSection'
import datas from '../data'

export default class PhotoList extends Component {

    state={
        datas:datas
    }

    getPhotos=() =>{
        return this.state.datas.map(data => {
            return <PhotoSection detail={data} key={data.id}/>

        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.getPhotos()}
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
