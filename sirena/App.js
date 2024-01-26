

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

const Stack = createNativeStackNavigator();



const ForgotPasswordScreen = ({navigation}) => {
  console.log('Forgot Password Screen');
  return (
    <View style={styles.safeViewContainer}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        
      <Text style={styles.title}>Forgot Password</Text>

      </View>
        <View style={styles.inputView}>
        
        <TextInput
          style={styles.inputText}
          label="Email"
          placeholder="Username/Email"/>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text>Go back</Text>
        </TouchableOpacity>
        
    
    </View>
    
    
    );
};

const LoginScreen = ({navigation}) => {

  const onPressLogin = () => {
    console.log('Login button pressed');
    console.log('email: ' + email);
    console.log('password: ' + password);    
  };


  const handleInputValue = (text) => {
    setState
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
    <StatusBar barStyle="dark-content"/>
      <View style={styles.safeViewContainer}>
      <Text style={styles.title}>Login Screen</Text>
        <View
          style={styles.inputView}>
          
          
          <TextInput
            style={styles.inputText}
            label="Email"
            placeholder="Username/Email"
            onChangeText={text => setEmail(text)}
            />

</View>
<View style={styles.inputView}>
          <TextInput 
          style={styles.inputText}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          />
</View>


      <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password</Text>
        </TouchableOpacity>
      <TouchableOpacity
          onPress={onPressLogin}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.forgotAndSignUpText}>Sign Up</Text>
        </TouchableOpacity>


      </View>
    
    
    
    </>
    
  );
};



const SignUpScreen = ({navigation}) => {

  const onPressSignUp = () => {
    console.log('Sign Up button pressed');
    console.log('Email: ' + state.email);
    console.log('Password: ' + state.password);
  };

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Sign up Screen</Text>

      <View style={styles.inputView}>
      <TextInput 
        label="Email"
        placeholder="Username/Email"
        onChange={text => setState({ email: text })}/>
      </View>

      <View style={styles.inputView}>
      <TextInput
        label="Password"
        placeholder="Password"
        onChange={text => setState({password: text})}/>
      </View>

      <TouchableOpacity
        onPress={onPressSignUp}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
        <Text>Go back</Text>
        </TouchableOpacity>
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