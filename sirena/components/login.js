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

export default LoginScreen;