import React from "react";
import Router from "./src/routes/routes";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
export default function App() {


let [fontsLoaded] = useFonts({
    'Marvel': require('./src/fonts/MarvelRegular.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Router/>

  );
}

