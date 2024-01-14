

import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    FlatList, 
    StyleSheet, 
    SafeAreaView,
    Button
} from "react-native"; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDo from "./todo";
import taskComponent from "./tasks";

const Stack = createNativeStackNavigator();

// Navigation from home screen to goals screen not working
const HomeScreen = ({nav}) => {
  return (
    <View style={styles.homeScreen}> 
    <Button title="Go to Goals"
            onPress={() => nav.navigate("Goals")}/>
      <ToDo/>
    </View>
  );
};

const GoalsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Goals Screen</Text>
    </View>
  );
};
  
const App = () => { 
    return ( 
      <NavigationContainer style={{backgroundColor: "#FFC0CB"}}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Goals" component={GoalsScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
        
      
        

     
        
    ); 
}; 
  
const styles = StyleSheet.create({ 
    safeView: {
      flex: 1,
    }, 
    container: { 
        flex: 1, 
        backgroundColor: "#FFC0CB",
    }, 

    homeScreen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFC0CB"
    }
  
    
}); 
  
export default App;