import React, { useState } from "react"; 
import { 
    View, 
    Text,
    StyleSheet, 
    Button
} from "react-native"; 
import GoalsScreen from "./goals";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


function HomeApp({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Goals"
                onPress={() => navigation.navigate('Goals')} />
        </View>
    );
}


export default function HomeScreen({navigation}) {
    return (
        <>
            <Drawer.Navigator 
                          screenOptions={{headerShown: false }}>
                <Drawer.Screen name="HomeApp" component={HomeApp}/>
                <Drawer.Screen name="Goals" component={GoalsScreen}/>
            </Drawer.Navigator>
        </>
        
    );
}

