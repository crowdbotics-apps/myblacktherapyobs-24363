import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//Screens

import Home from "../Dashboard/index";
import Tabs from "../Dashboard/Tabs";
import Register from "./Screens/Register";
import Reset from "./Screens/Reset";
import Login from "./Screens/Login";
const Stack = createStackNavigator();
const Authenticationn = () => {
  return (
    <Stack.Navigator headerMode="none" linking={"athletictrainingscheduler://"}>
      <Stack.Screen
        initialRouteName="Login"
        name="Login"
        component={Login}
        options={{ gestureEnabled: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ gestureEnabled: false }}
      />

      <Stack.Screen
        name="Reset"
        component={Reset}
        options={{ gestureEnabled: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />

      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default Authenticationn;
