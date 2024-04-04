import React, { useState } from "react"; 
import { 
    View, 
    Text,
    StyleSheet, 
    Button
} from "react-native"; 
import MyTabBar from "./tabBar";
import GoalsScreen from "./goals";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


export default function HomeScreen({navigation}) {
    return (
        <>

            <Drawer.Navigator 
                          screenOptions={{headerShown: false }}>
                <Drawer.Screen name="Goals" component={GoalsScreen}/>
            </Drawer.Navigator>
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    }
});