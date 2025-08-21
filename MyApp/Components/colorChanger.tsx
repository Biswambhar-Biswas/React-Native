import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";

export default function ColorChanger(){

    function generateColor(){
            const Clr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

            for (let i = 0; i < 7; i++) {
        let randomNumber =  Math.floor(Math.random()*10)
        let theStringWill = Clr[randomNumber]
        setbgColor(theStringWill)
    }
    }


    return(
        <View>
            <TouchableOpacity onPress={generateColor} style={styles.color}>
                Press
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    color:{
        backgroundColor:{}
    }
})