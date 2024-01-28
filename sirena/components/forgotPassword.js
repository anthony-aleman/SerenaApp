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
import validator from 'validator';

const ForgotPasswordScreen = ({navigation}) => {
    console.log('Forgot Password Screen');

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const validateEmail = (input) => {
        setEmail(input);
        // check if email is valid
        if (!input) {
            setError('Email is required.');
            return false;
        } else if (validator.isEmail(input)) {
            setError('');
        } else {
            setError('Email is invalid.');
            return false;
        }
    };

    const onPressForgotPassword = () => {
        console.log('Forgot Password button pressed');
        console.log('Email: ' + email);
        
    };

    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          
        <Text style={styles.title}>Forgot Password</Text>
  
        </View>
          <View style={styles.inputView}>
          
            <TextInput
                style={styles.inputText}
                label="Email"
                placeholder="Username/Email"
                value={email}
                onChangeText={(text) => validateEmail(text)}/>

            
          </View>
            {/* Display error/validation icon*/}
            
            {error !== null && ( error ? 
            
            ( <Text style={styles.invalidMark}>✗</Text>) 
            : 
            ( <Text style={styles.validMark}>✓</Text>))}


            {/* Error message */}

            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}


          <TouchableOpacity
            onPress={onPressForgotPassword}
            style={styles.forgotPassBtn}>
            <Text style={styles.loginText}>Send Email</Text>
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

    forgotPassBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:20
      },
    
    invalidMark:{
        color:"red",
        fontSize: 20,
        marginLeft: 5,
    },

    validMark:{
        color:"green",
        fontSize: 20,
        marginLeft: 5,
    },

  });

export default ForgotPasswordScreen;