import React from "react"
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native'

let div = View;

function FlatCard() {
    return (
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.cardOne}>
                            <Text style={styles.text}>RED</Text>
                        </View>
                        <View style={styles. cardTwo}>
                            <Text style={styles.text}>Blue</Text>
                        </View>
                        <View style={styles.cardThree}>
                            <Text style={styles.text}>Green</Text>
                        </View>
                        <View style={styles.cardThree}>
                            <Text style={styles.text}>Green</Text>
                        </View>
                        <View style={styles.cardThree}>
                            <Text style={styles.text}>Green</Text>
                        </View>
                        <View style={styles.cardThree}>
                            <Text style={styles.text}>Green</Text>
                        </View>
                    </View>
                </ScrollView>
    )
}



const styles = StyleSheet.create({
    scroll:{
        
    }
    ,
    container: {
        flex:1,
        flexDirection:"row"
    },
    cardOne: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 100,
        backgroundColor: "red",
        margin:10
    },
    cardTwo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 100,
        backgroundColor: "blue",
                margin:10

    },
    cardThree: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 100,
        backgroundColor: "green",
                margin:10

    },
    text: {
        color: "white",
        fontWeight: "900",
        // fontFamily:"arial"
    },
    red: {
        backgroundColor: "red"
    }
})
export default FlatCard;