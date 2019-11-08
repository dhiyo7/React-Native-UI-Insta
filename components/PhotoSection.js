import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class PhotoSection extends Component {


    state={
        heartIcon:'ios-heart-empty',
        like:false
    }

    toggleLike=() =>{
        this.setState({
            like: !this.state.like
        })  

        if (this.state.like) {
            this.setState({
                heartIcon:'ios-heart'
            })
            
        } else {
            this.setState({
                heartIcon:'ios-heart-empty'
            })
            
        }
    }

    render() {
        return (
            <View style={styles.container}>

                {/* Username Section */}
                <View style={styles.thumbnailSection}>
                    <Image source={{uri: "https://i.pravatar.cc/400?img=1"}} style={styles.thumbnail}></Image>
                    <Text style={styles.Username}> PhotoSection </Text>
                </View>

                {/* Photo Feed Section */}
                <View>
                    <Image source={{uri: "https://images.unsplash.com/photo-1553174241-0b28d763cafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}} style={styles.PhotosFeed}/>
                </View>

                {/* Ion Icon  */}
                <View style={styles.heartContainer}>
                    <TouchableWithoutFeedback onPress={this.toggleLike}>
                    <Icon name={this.state.heartIcon} size={32} style={{color: this.state.heartIcon === 'ios-heart-empty' ? 'black' : 'red'}}/>
                    </TouchableWithoutFeedback>
                </View>

                {/* Username & Hastag */}
                <View style={styles.imgMetadata}>
                    <Text style={styles.metaUsername}>Dhiyo7</Text>
                    <Text style={styles.hastag}>#holiday,#Roam</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    thumbnailSection:{
        flexDirection:'row',
        padding:5,
        marginLeft: 10,
        marginTop: 5,
        alignItems:'center'
    },

    thumbnail:{
        width:40,
        height:40,
        borderRadius:25,
    },

    Username:{
        paddingLeft:7,
        fontWeight:'bold',
        fontSize:10,
        letterSpacing:1
    },

    PhotosFeed:{
        width:null,
        height:250,
    },

    Heart:{
        marginLeft:10,
    },

    imgMetadata:{
        flexDirection:'row'
    },
    metaUsername:{
        marginLeft:10,
        fontWeight:'bold'
    },
    hastag:{
        marginLeft:10,
        color:'#3d4aff'
    },
    heartContainer:{
        paddingVertical:12
    }
})

export default PhotoSection