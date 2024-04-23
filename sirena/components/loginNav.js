import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./login";
import SignUpScreen from "./signUp";
import ForgotPasswordScreen from "./forgotPassword";
import HomeScreen from './home';
const Stack = createNativeStackNavigator();


export default function LoginNav({ navigation }) {

    return(

        
        <Stack.Navigator initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={LoginScreen} 
            options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}