import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    StatusBar
} from "react-native"; 

import validator from 'validator';

const LoginScreen = ({navigation}) => {

    const onPressLogin = () => {
      console.log('Login button pressed');
      console.log('email: ' + email);
      console.log('password: ' + password);    
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
      <StatusBar barStyle="dark-content"/>
        <View style={styles.container}>
        <Text style={styles.title}>Login Screen</Text>
          <View
            style={styles.inputView}>
            
            
            <TextInput
              style={styles.inputText}
              label="Email"
              placeholder="Username/Email"
              onChangeText={text => validateEmail(text)}
              />


  
  </View>
  <View>
  {/* Display error/validation icon*/}
              
  {emailError !== null && ( emailError ? 
              
              ( <Text style={styles.invalidMark}>✗</Text>) 
              : 
              ( <Text style={styles.validMark}>✓</Text>))}


              {/* Error message */}

              {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}

  </View>


  <View style={styles.inputView}>
            <TextInput 
            style={styles.inputText}
            placeholder="Password"
            onChangeText={text => validatePassword(text)}
            />
  </View>

  <View>
  {/* Display error/validation icon*/}
              
  {passwordError !== null && ( passwordError ? 
              
              ( <Text style={styles.invalidMark}>✗</Text>) 
              : 
              ( <Text style={styles.validMark}>✓</Text>))}


              {/* Error message */}

              {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}

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
      height:60,
      marginBottom:25,
      justifyContent:"center",
      padding:27,
      },

      inputText:{
      height:50,
      color:"white",
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
        marginTop:25,
        marginBottom:25
      },

      invalidMark:{
        flex: 3,
        color:"red",
        fontSize: 20,
        marginLeft: 5,
      },

    validMark:{
      flex: 1,
      flexDirection: 'row',
        color:"green",
        fontSize: 20,
    },
    });

export default LoginScreen;