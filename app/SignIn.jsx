import { useRouter } from "expo-router";
import { useState } from "react";
import React from "react";
import { Text, View ,StyleSheet,ImageBackground,Image, Pressable,SafeAreaView, TextInput} from "react-native";
import CheckBox from 'expo-checkbox';

export default function SignIn() {

  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  return (
    
    <SafeAreaView style={styles.safeareaview}>
        
        <ImageBackground style={styles.BackgroundImage} resizeMode="cover" source={require("../assets/images/SignInBackground.png")}>
        <View style={styles.container}>
        <View style={styles.rectanglebar} />
        
        <View style={styles.child01}>
          <Text style={styles.title}>Sign in now</Text>
        </View>

        <View style={styles.child02}>
          <Text style={styles.subtitle}>E-mail</Text>
          <View style={styles.textinputfield}>
          <TextInput style={styles.textinput} placeholder="user@email.com"></TextInput>
          </View>
        </View>

        <View style={styles.child03}>
          <Text style={styles.subtitle}>Password</Text>
          <View style={styles.textinputfield}>
          <TextInput style={styles.textinput} placeholder="**********"></TextInput>
          </View>
        </View>

        <View style={styles.child04}>
            <View style={styles.rememberme}>
            <CheckBox
                value={isChecked}
                onValueChange={(newValue) => setIsChecked(newValue)}
                tintColors={{ true: '#0f0', false: '#f00' }}
            />
            <Text style={styles.subtitle}>Remember me</Text>
            </View>
          
          <Text style={styles.linkedtext} onPress={()=>router.push('/ForgetPassword')}>Forget Passsword</Text>
        </View>

        <Pressable style={styles.button} onPress={()=>router.push('/OnBoard02')}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>


        <View style={styles.child05}>
          <Text style={styles.subtitle}>Don't you have an account</Text>
          <Text style={styles.linkedtext} onPress={()=>router.push('/SignUp')}>Sign-up</Text>
        </View>

        </View>
        </ImageBackground>       
      </SafeAreaView>    
  ) 
}
const styles = StyleSheet.create({
  safeareaview:{
    flex: 1,
  },
  BackgroundImage:{flex:1,
    resizeMode:"cover",
    justifyContent:"flex-end",
    alignItems:"center"
  },
  container:{
    backgroundColor:"#fff",
    borderRadius:50,
    width: "95%",
    bottom:30,
    flexDirection:"column",
    height: 453,
    position: "absolute",
    flex:1,
    justifyContent:"center",
    gap:12,
    alignItems:"center"
  },
  rectanglebar: {
    borderRadius: 9,
    backgroundColor: "#5a189a",
    width: "20%",
    height: 5,
    },
  child01:{
    justifyContent:"center",
    alignItems:"center"
  },
  child02:{
    justifyContent:"left",
    alignItems:"left",
    flexDirection:"column",
  },
  textinputfield:{
    width:"100%",
    backgroundColor:"#f7f7f9",
    flexDirection:"row",
    height:56,
    borderRadius:20
  },
  textinput:{
    width:"75%",
    left:10
  },
  child03:{
    justifyContent:"center",
    alignItems:"left",
    flexDirection:"column"
  },
  child04:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"80%",
  },
  child05:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    width:"80%"
  },
  
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 24,
    letterSpacing: -0.4,
    fontWeight: '600',
  },
  linkedtext:{
    textDecorationLine:"underline"
  },
  rememberme:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  subtitle: {
    fontSize: 16,
    letterSpacing: -0.2,
    fontWeight: '500',
    // fontFamily: 'Poppins-Medium', // Uncomment if you have the font available
    color: 'black', 
  },
  button: {
    backgroundColor: '#5A189A',
    borderRadius: 500,
    width: '80%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  })
