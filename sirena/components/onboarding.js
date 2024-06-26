/*
    This component is responsible for 
    rendering the onboarding process for new users.
    It will display the 
    -Personality Test, 
    -Character Customization, and 
    -skill tree assembly (maybe animation?)

    
    
*/
import PersonalityTest from "./personalitytest";
import CharacterCreation from "./characterCreation";
import SkillTree from "./skillTree";


const OnboardingScreen1 = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Onboarding Screen</Text>
        </View>
    )
}

const OnboardingScreen2 = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Onboarding Screen</Text>
        </View>
    )
}
const OnboardingScreen3 = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Onboarding Screen</Text>
        </View>
    )
}

export default function Onboarding({navigation}) {

    return (
        <>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} options={{headerShown: false}}/>
            <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} options={{headerShown: false}}/>
            <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} options={{headerShown: false}}/>
            <Stack.Screen name="PersonalityTest" component={PersonalityTest} options={{headerShown: false}}/>
            <Stack.Screen name="CharacterCreation" component={CharacterCreation} options={{headerShown: false}}/>
            <Stack.Screen name="SkillTree" component={SkillTree} options={{headerShown: false}}/>
        </Stack.Navigator>
        </>
        
    );
};