import colors from "../../Constants/colors";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImageBackground, View, Image } from "react-native";
import Community from "./Community";
import Group from "./Group";
import Conference from "./Conference";
import Directory from "./Directory";
import CreateGroup from "./CreateGroup";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (focused, tintColor) => {
          if (route.name === "Community") {
            let color = colors.grey;
            if (focused.focused == true) {
              return (
                <ImageBackground
                  source={require("../../Assets/Icons/blackpatch.png")}
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.gold,
                      }}
                      source={require("../../Assets/Icons/community.png")}
                    />
                  </View>
                </ImageBackground>
              );
            } else {
              return (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: colors.grey,
                    resizeMode: "contain",
                  }}
                  source={require("../../Assets/Icons/community.png")}
                />
              );
            }
          } else if (route.name === "CreateGroup") {
            console.log(focused.focused);
            let color = colors.grey;
            if (focused.focused == true) {
              return (
                <ImageBackground
                  source={require("../../Assets/Icons/blackpatch.png")}
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.gold,
                      }}
                      source={require("../../Assets/Icons/CreateGroup.png")}
                    />
                  </View>
                </ImageBackground>
              );
            } else {
              return (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: color,
                    resizeMode: "contain",
                  }}
                  source={require("../../Assets/Icons/CreateGroup.png")}
                />
              );
            }
          } else if (route.name === "Group") {
            console.log(focused.focused);
            let color = colors.grey;
            if (focused.focused == true) {
              return (
                <ImageBackground
                  source={require("../../Assets/Icons/blackpatch.png")}
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.gold,
                      }}
                      source={require("../../Assets/Icons/group.png")}
                    />
                  </View>
                </ImageBackground>
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 30, tintColor: color }}
                  source={require("../../Assets/Icons/group.png")}
                />
              );
            }
          } else if (route.name === "Conference") {
            console.log(focused.focused);
            let color = colors.grey;
            if (focused.focused == true) {
              return (
                <ImageBackground
                  source={require("../../Assets/Icons/blackpatch.png")}
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.gold,
                      }}
                      source={require("../../Assets/Icons/conference.png")}
                    />
                  </View>
                </ImageBackground>
              );
            } else {
              return (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: color,
                    resizeMode: "contain",
                  }}
                  source={require("../../Assets/Icons/conference.png")}
                />
              );
            }
          } else if (route.name === "Directory") {
            console.log(focused.focused);
            let color = colors.grey;
            if (focused.focused == true) {
              return (
                <ImageBackground
                  source={require("../../Assets/Icons/blackpatch.png")}
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.gold,
                      }}
                      source={require("../../Assets/Icons/directory.png")}
                    />
                  </View>
                </ImageBackground>
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 30, tintColor: color }}
                  source={require("../../Assets/Icons/directory.png")}
                />
              );
            }
          }
        },
      })}
      initialRouteName={"Home"}
      tabBarOptions={{
        activeTintColor: "#000",
      }}
    >
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="CreateGroup" component={CreateGroup} />
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="Conference" component={Conference} />
      <Tab.Screen name="Directory" component={Directory} />
    </Tab.Navigator>
  );
};
export default Tabs;
