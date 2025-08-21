import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";

export default function MapLoop() {
    //Array of Objects
    const items = [
        {
            id: "1",
            name: "Squirrel",
            imageUrl: "https://owl-online.org/wp-content/uploads/2020/09/pexels-pixabay-47359-1024x768.jpg"
        },
        {
            id: "2",
            name: "Tiger",
            imageUrl: "https://muusart.com/wp-content/uploads/2023/03/Steps-to-Easily-Drawing-a-Realistic-Tiger-916x1024.jpg"
        },
        {
            id: "3",
            name: "Lion",
            imageUrl: "https://media.istockphoto.com/id/944272082/photo/close-up-of-lion-panthera-leo-8-years-old-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=C52NB6RvoBD5WMue_cQAj7eS840BOjqi_LPSzs2uNaA="
        }
    ];


    return (
        <View>
            <ScrollView>
                <Text>Show</Text>

                    {items.map(({ id, name, imageUrl }) => (
                        <View key={id}>
                            <Image
                                source={{ uri: imageUrl }}
                                style={styles.img} />
                            <Text>{name}</Text>
                            <Text>{id}</Text>
                        </View>
                    ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 60,
        width: 60,
        margin:10,
        borderRadius:50
    },
    text: {},
})