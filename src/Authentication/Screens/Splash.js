import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { View } from "react-native";
const Splash = (props) => {
  useEffect(() => {
    SplashScreen.hide();
    props.navigation.navigate("Welcome");
  }, []);

  return <View></View>;
};

export default Splash;
