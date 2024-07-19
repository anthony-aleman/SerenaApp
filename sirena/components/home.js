import React, { useState, useEffect } from "react"; 
import { 
    View, 
    Text,
    StyleSheet, 
    Button
} from "react-native"; 
import GoalsScreen from "./goals";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { supabase } from "../utils/supabase";
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function HomeApp({navigation}) {
    return (
        <>
        <View style={{
                    flex: 0.74, 
                    alignItems: 'left', 
                    justifyContent: 'center', 
                    backgroundColor: '#FF8FAB'}}>
        
        <Ionicons style= {{ backgroundColor: '#FF8FAB', paddingLeft: 10}} name="menu" size={40}  onPress={() => navigation.openDrawer()} />
        </View>
        <View style={{
                    flex: 3, 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#FF8FAB'}}>
        
            <Text>Home Screen</Text>
        
        
            <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
        </View>
        </>
    );
}

function SkillTree({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Skill Tree</Text>
        </View>
    );
}

function MoodTracker({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Mood Tracker</Text>
        </View>
    );
}

function DBTHelpSheets({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>DBT Help Sheets</Text>
        </View>
    );
}

function DoItTogether({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Do It Together</Text>
        </View>
    );
}

function Art({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Art</Text>
        </View>
    );
}

function YogaMeditation({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Yoga/Meditation</Text>
        </View>
    );
}

function OnboardingScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Onboarding Screen</Text>
        </View>
    );
}


export default function HomeScreen({navigation}) {


    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      supabase.auth.getSession().then((  { data: { session } }) => {
        setSession(session)
        if (session && session.user) {
            fetchUserData(session.user.id);
        }
      });

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        if (session && session.user) {
            fetchUserData(session.user.id);
        } else {
            setLoading(false);
        }
      });
    }, [])

    const fetchUserData = async (userID) => {
        const {data, error} = await supabase
        .from('public_user')
        .select('has_completed_test')
        .eq('user_id', userID)
        .single();

        if (error) {
            console.log('Error fetching user data:', error.message);
            return null;
        }

        if (data) {
            setUserData(data);
        }

        setLoading(false);
    };

    /*if (loading) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }*/


    if (true) {
        return (
           <>
                <Drawer.Navigator 
            initialRouteName="Home" 
                    
                      screenOptions={{
                        drawerActiveTintColor: '#FB6F92',
                            headerShown: false, 
                            
                            drawerStyle: {
                                backgroundColor: '#FFB3C6',
                                width: 200,
                                

                            }}}>
            <Drawer.Screen name="Home" component={HomeApp}/>
            <Drawer.Screen name="Goal Tracker" component={GoalsScreen}/>
            <Drawer.Screen name="Skill Tree" component={SkillTree}/>
            // Change mood tracker to mood journal
            <Drawer.Screen name="Mood Tracker" component={MoodTracker}/>
            <Drawer.Screen name="DBT Help Sheets" component={DBTHelpSheets}/>
            <Drawer.Screen name="Do-It Together" component={DoItTogether}/>
            <Drawer.Screen name="Art" component={Art}/>
            <Drawer.Screen name="Yoga/Meditation" component={YogaMeditation}/>
        </Drawer.Navigator>
           </> 
        );
    } 
};


