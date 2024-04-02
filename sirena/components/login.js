import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    StatusBar,
    ImageBackground,
    Alert
} from "react-native"; 

import validator from 'validator';

const LoginScreen = ({navigation}) => {

    const onPressLogin = () => {
      console.log('Login button pressed');
      console.log('email: ' + email);
      console.log('password: ' + password);
      Alert.alert('Login Successful');
      navigation.navigate('Home');    
    };
  
  
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
  
    return (
      <>
      
      <ImageBackground
        source={require('../assets/background_prp.jpg')} style={{width: '100%', height: '100%'}} >
      
        <View style={styles.container}>
        <Text style={styles.title}>Login Screen</Text>
          <View
            style={styles.inputView}>
            
            
            <TextInput
              style={styles.inputText}
              label="Email"
              placeholder="Username/Email"
              placeholderTextColor={"white"}
              onChangeText={text => validateEmail(text)}
              />
          </View>
          <View
            style={styles.inputView}>

            <TextInput
              style={styles.inputText}
              label="Password"
              placeholder="Password"
              placeholderTextColor={"white"}
              onChangeText={text => validatePassword(text)}
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
      
      </ImageBackground>
      </>
      
    );
  };




  const styles = StyleSheet.create({ 
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

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
      backgroundColor:"#CA87FF",
      borderRadius:25,
      height:60,
      marginBottom:25,
      justifyContent:"center",
      padding:27,
      },

      inputText:{
      height:50,
      color:"white",
      fontSize:16
      },

      //Button styling
      forgotAndSignUpText:{
        color:"black",
        fontSize:16
      },

      loginText:{
        color:"white",

      },

      loginBtn:{
        width:"80%",
        backgroundColor:"#DE5FFF",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        marginBottom:25
      },

  
    });

export default LoginScreen;