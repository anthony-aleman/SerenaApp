

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

const Stack = createNativeStackNavigator();

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Sirena</Text>
      <Button title="Sign Up"
              onPress={() => navigation.navigate('Sign Up')}/>
      <Button title="Sign In"
              onPress={() => navigation.navigate('Sign In')}/>
    </View>
  );
}

const SignUpScreen = () => {
  return (
    <View>
      <Text>Register Screen</Text>
      <TextInput 
        label="Email"
        placeholder="Username/Email"/>
      <TextInput placeholder="Password"/>
    </View>
  );
};

const SignInScreen = () => {
  return (
    <View>
      <Text>Log In Screen</Text>
      <TextInput 
        label="Email"
        placeholder="Username/Email"/>
      <TextInput placeholder="Password"/>
    </View>
  );
}

// Navigation from home screen to goals screen not working
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homeScreen}> 
    <Button title="Go to Goals"
            onPress={() => navigation.navigate('Goals', {name: 'Sirena'})}/>
      <ToDo/>
    </View>
  );
};

const GoalsScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Goals Screen</Text>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};
  
const App = () => { 
    return ( 
        
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }} >
          <Stack.Screen name="StartScreen" component={StartScreen}/>
          <Stack.Screen name="Sign Up" component={SignUpScreen}/>
          <Stack.Screen name="Sign In" component={SignInScreen}/>
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