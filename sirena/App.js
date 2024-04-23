

import React, { useState, useEffect } from "react"; 
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
import { supabase } from "./utils/supabase";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./components/login";
import SignUpScreen from "./components/signUp";
import ForgotPasswordScreen from "./components/forgotPassword";
import ToDo from "./components/todo";
import HomeScreen from "./components/home";
import GoalsScreen from "./components/goals";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginNav from "./components/loginNav";
import LoggedNav from "./components/loggedinNav";
const Drawer = createDrawerNavigator();

  
const App = () => { 

    const [session, setSession] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
      supabase.auth.getSession().then((  { data: { session } }) => {
        setSession(session)
      })

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])




    return ( 
        <View style={{flex: 1 }}>
          <NavigationContainer>
            {session && session.user ? <LoggedNav key={session.user.id} session={session}/> : <LoginNav/>}
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