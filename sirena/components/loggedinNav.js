import HomeScreen from "./home";
import { Session } from "@supabase/supabase-js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { supabase } from "../utils/supabase";
import { useState } from "react";
import Onboarding from "./onboarding";
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: When logging in, a new user should have to submit 
//       -> a Personality Test before they can access the Home Screen.
//       This is only performed once  for new users 
//       and the results should be stored in the database.
//       The Personality Test should be a series of questions 
//          that the user must complete. Should be short and concise with a bar to show test progress.
//      -> Then they must customize their character 
//      -> Finally, their skill tree is assembled based on the results of their Personality Test
//      -> They can then access the Home Screen
//     -> Returning users can access the Home Screen immediately

export default function LoggedNav({navigation, session}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    

      const retrievePersonalityData = async () => {
        try {
            const valueString = await AsyncStorage.getItem('PersonalityTest');
            const value = JSON.parse(valueString);
            if (value === 'false') {
                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.error('Error retrieving Personality Test data: ', error);
            return null;
        }
      };

      const retrieveCustomizeData = async () => {
        try {
            const valueString = await AsyncStorage.getItem('CustomizeCharacter');
            const value = JSON.parse(valueString);
            if (value === 'false') {
                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.error('Error retrieving Customization data: ', error);
            return null;
        }
      };

    const retrieveSkillTreeData = async () => {
        try {
            const valueString = await AsyncStorage.getItem('SkillTree');
            const value = JSON.parse(valueString);
            if (value === 'false') {
                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.error('Error retrieving Skill Tree data: ', error);
            return null;
        }
    };

    return(
        <>
            { retrieveCustomizeData() && retrievePersonalityData() && retrieveSkillTreeData() ? 
            
            <Onboarding/>  : <HomeScreen/>}
        </>
    );
}