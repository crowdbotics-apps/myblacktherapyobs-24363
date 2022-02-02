import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//Screens
import Splash from "./Screens/Splash";
import Welcome from "./Screens/Welcome";
import Authenticationn from "../Member/Authentication/index";
import Authentications from "../Therapist/Authentication/index";
const Stack = createStackNavigator();
const Authentication = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        linking={"athletictrainingscheduler://"}
      >
        <Stack.Screen
          initialRouteName="Splash"
          name="Splash"
          component={Splash}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Authenticationn"
          component={Authenticationn}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Authentications"
          component={Authentications}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Authentication;
