import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./global.css";


export default function RootLayout() {
  const [fontsLoaded, error] = useFonts ({
    "Poppins-Black": require('../assets/fonts/Poppins-Black.ttf'),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf")
  })
  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded) {
    return null; // SplashScreen gösteriliyor
  }
  return <Stack screenOptions={{headerShown: false}}/>;


}




