import React from "react";
import {
    View, StyleSheet, Image, Text
} from "react-native"

function MyImage() {
    return (
        <View>
            <Image
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmNCtUxGTpR8gFKlx_lWZyT0-2LIb8Om63g&s" }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width:200
    }
}
)

export default MyImage;