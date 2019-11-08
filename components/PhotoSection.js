import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'


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
                    <Image source={{uri: this.props.detail.user_avatar}} style={styles.thumbnail}></Image>
                    <Text style={styles.Username}> {this.props.detail.username} </Text>
                </View>

                {/* Photo Feed Section */}
                <View>
                    <Image source={{uri: this.props.detail.image}} style={styles.PhotosFeed}/>
                </View>

                {/* Ion Icon  */}
                <View style={styles.heartContainer}>
                    <TouchableWithoutFeedback onPress={this.toggleLike}>
                    <Icon name={this.state.heartIcon} size={32} style={{marginLeft:10, color: this.state.heartIcon === 'ios-heart-empty' ? 'black' : 'red'}}/>
                    </TouchableWithoutFeedback>
                    <EvilIcons name='comment' size={33}/>
                    <Feather name='send' size={32} style={styles.send}/>
                </View>

                {/* Username & Hastag */}
                <View style={styles.imgMetadata}>
                    <Text style={styles.metaUsername}>{this.props.detail.username}</Text>
                    <Text style={styles.hastag}>{this.props.detail.caption}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#f1f2f6',
        paddingBottom: 5,
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
        paddingVertical:12,
        flexDirection:'row'
    },
    send:{
        opacity:5,
        color:'#000'
    }
})

export default PhotoSection