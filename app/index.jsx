import { Text, View ,StyleSheet} from "react-native";
import { SplashScreen } from "./SplashScreen";
import { OnBoard } from "./OnBoard";
import { useEffect,useState } from "react";



export default function Index() {
  const [AppStarted,setAppStarted] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setAppStarted(true);
    },3000)
  });

  if(AppStarted){
    return(
      <OnBoard/>
    )
  }else{
    return(
      <SplashScreen/>
    )
  } 
}
