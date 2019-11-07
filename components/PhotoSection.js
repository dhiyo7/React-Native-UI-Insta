import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class PhotoSection extends Component {
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
                <View>
                    <Icon name="ios-heart-empty" size={32} style={styles.Heart}/>
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
        padding: 5

    }
})

export default PhotoSection