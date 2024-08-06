import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    Alert,
    AppState
} from "react-native";
import { supabase } from "../utils/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import validator from 'validator';


// TODO: Setup custom SMTP server for email testing

AppState.addEventListener('change', (state) => {
  if ( state == 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);


  const validateEmail = (input) => {
    setEmail(input);
    // check if email is valid
    if (!input) {
      setEmailError('Email is required.');
      return false;
    } else if (validator.isEmail(input)) {
      setEmailError('');
    } else {
      setEmailError('Email is invalid.');
      return false;
    }
  };

  const validatePassword = (input) => {
    setPassword(input);
    // check if password is valid
    if (!input) {
      setPasswordError('Password is required.');
      return false;
    } else if (input.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      return false;
    } else {
      setPasswordError('');
    }
  };

  async function onPressSignUp() {
    setLoading(true);
      console.log('Sign Up button pressed');
      console.log('Email: ' + email);
      console.log('Password: ' + password);
      
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    await AsyncStorage.setItem('PersonalityTest', 'false');
    await AsyncStorage.setItem('CustomizeCharacter', 'false');
    await AsyncStorage.setItem('SkillTree', 'false');

    if (error) {
        Alert.alert(error.message)
    } setLoading(false)
    };
  
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up Screen</Text>
  
        <View style={styles.inputView}>
        <TextInput 
          style={styles.inputText}
          label="Email"
          placeholder="Username/Email"
          value={email}
          onChangeText={text => validateEmail(text)}/>
        </View>
  
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          label="Password"
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => validatePassword(text)}/>
        </View>
  
        <TouchableOpacity
          onPress={onPressSignUp}
          style={styles.signUpBtn}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
          <Text>Go back</Text>
          </TouchableOpacity>
      </View>
    );
  };


  const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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

      signUpBtn:{
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


export default SignUpScreen;