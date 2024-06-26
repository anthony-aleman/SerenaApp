import HomeScreen from "./home";
import { Session } from "@supabase/supabase-js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import Onboarding from "./onboarding";

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

    return(
        <>
            { userData ? 
            
            <Onboarding/>  
                : <HomeScreen/>}
        </>
    );
}