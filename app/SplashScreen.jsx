import { Text, View ,StyleSheet} from "react-native";

export function SplashScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#5A189A"
      }}
    >
      <Text style={{color: 'white',
                    fontSize: 36,
                    // fontFamily: 'Poppins',
                    fontWeight: '800'
                    }}>Travel Sense</Text>
      
      <Text style={{color:"white",fontSize: 12,
                     // fontFamily: 'Poppins',
                      fontWeight: '700',
                      wordWrap: 'break-word',
                      position:"absolute",
                      bottom:25}}>from</Text>
      <Text style={{color:"white",
                    fontSize:20,
                   // fontFamily: 'Poppins',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    position:"absolute",
                    bottom:5}}>Zybertron</Text>
    </View>
    
  );
}
