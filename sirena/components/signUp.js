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

export default SignUpScreen;