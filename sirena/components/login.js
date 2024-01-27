import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    StatusBar
} from "react-native"; 
const LoginScreen = ({navigation}) => {
    
    const onPressLogin = () => {
      console.log('Login button pressed');
      console.log('email: ' + email);
      console.log('password: ' + password);    
    };
  
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
  
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

      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:20
      },
    });

export default LoginScreen;