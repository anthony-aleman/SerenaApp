import HomeScreen from "./home";
import { Session } from "@supabase/supabase-js";


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

export default function LoginNav({navigation, session}) {

    return(
        <>
            <HomeScreen/>
        </>
    );
}