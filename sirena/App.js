

import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    FlatList, 
    StyleSheet, 
    SafeAreaView,
    Button,
    StatusBar
} from "react-native"; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDo from "./components/todo";
import LoginScreen from "./components/login";
import SignUpScreen from "./components/signUp";
import ForgotPasswordScreen from "./components/forgotPassword";
const Stack = createNativeStackNavigator();



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
        <View style={{flex: 1 }}>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }} >
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Goals" component={GoalsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
        </View>
      
      
        

     
        
    ); 
}; 


  
const styles = StyleSheet.create({ 
    safeView: {
      flex: 1,
    }, 

    safeViewContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    container: { 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFC0CB",
    }, 

    homeScreen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFC0CB"
    },

    title: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#642195",
      marginBottom: 40,
    },

    inputView:{
      width:"80%",
      backgroundColor:"#FFC0CB",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
      },

      inputText:{
      height:50,
      color:"white"
      },

      //Button styling
      forgotAndSignUpText:{
        color:"gray",
        fontSize:11
      },

      loginText:{
        color:"gray",

      },

      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginBottom:15
      },
  
    
}); 
  
export default App;