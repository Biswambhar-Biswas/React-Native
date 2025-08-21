import React from "react"
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native'
import FlatCard from "./Components/flatCard";
import MyImage from "./Components/Image";
import LinkTag from "./Components/Link(Ancore Tag)";
import ElevatedCard from "./Components/elevatedCard";
import MapLoop from "./Components/MapLoop";

function AppPro(){
    return(
        <SafeAreaView>
            <ScrollView horizontal>
                <FlatCard/>                
            </ScrollView>
                <MyImage/>
                <LinkTag/>
                {/* <ElevatedCard/> */}
                <MapLoop/>
        </SafeAreaView>
        
    )}





export default AppPro;