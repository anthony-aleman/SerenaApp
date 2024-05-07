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
  const [loading, setLoading] = useState(false);

  async function onPressSignUp() {
    setLoading(true);
      console.log('Sign Up button pressed');
      console.log('Email: ' + email);
      console.log('Password: ' + password);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      console.log(data);

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
          onChangeText={text => setEmail(text)}/>
        </View>
  
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          label="Password"
          placeholder="Password"
          onChangeText={text => setPassword(text)}/>
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