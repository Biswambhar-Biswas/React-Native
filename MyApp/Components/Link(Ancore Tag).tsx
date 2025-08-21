import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    StyleSheet,
    useColorScheme
} from "react-native"


export default function LinkTag() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    const isDark = useColorScheme() === 'dark'
    return (
        <View>
            <TouchableOpacity
                onPress={() => { openWebsite("https://reactnative.dev/docs/linking") }}
            >
                <Text style={isDark ? styles.white : styles.dark}>Click Me!!!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    white: {
        color: "white"
    },
    dark: {
        color: "#000000ff"
    }

})

