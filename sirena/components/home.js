import React, { useState } from "react"; 
import { 
    View, 
    Text,
    StyleSheet, 
    Button
} from "react-native"; 
import MyTabBar from "./tabBar";

export default function HomeScreen({navigation}) {
    return (
        <View style={{flex:1, alignContent: "center"}}>
            <View>
            <Text>Stuff</Text>
            <Text>More Stuff</Text>
            <Text>Stuff</Text>
            <Text>More Stuff</Text>
            <Text>Stuff</Text>
            <Text>More Stuff</Text>
            <Text>Stuff</Text>
            <Text>More Stuff</Text>
            <Text>Stuff</Text>
            <Text>More Stuff</Text>
            <Text>Stuff</Text>
            <Text>More Stuff</Text>
            <Text>Stuff</Text>
            <Text>More Stuff</Text>
            <Text>Stuff</Text>
            <Text>More Stuff</Text>
            
                
            </View>
            
            <MyTabBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    }
});