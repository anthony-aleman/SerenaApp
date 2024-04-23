import HomeScreen from "./home";
import { Session } from "@supabase/supabase-js";

export default function LoginNav({navigation, session}) {

    return(
        <>
            <HomeScreen/>
        </>
    );
}