import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";


export default function ElevatedCard() {
    return (
        <View style={styles.card}>
            <View style={styles.heading}>
                <Text  style={styles.headingText}>Students Login</Text>
                <Text  style={styles.headingText}>Teachers Login</Text>
            </View>
            <View>
                <Image
                source={{uri:"https://w7.pngwing.com/pngs/408/212/png-transparent-project-management-body-of-knowledge-project-management-professional-project-manager-management-project-miscellaneous-text-logo-thumbnail.png"}}
                style={styles.image}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"orange",
        borderRadius:8,
        padding:8,
        margin:8,
        height:500

    },
    heading:{

        flex:1,
        justifyContent:"space-evenly",
        margin:10,
        alignItems:"center"


    },
    headingText :{
        color:'black',
        backgroundColor:"red",
    },

    image:{
        height:400,
        borderRadius:10
    }
})

