import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../../Constants/colors";
const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.sidebarHeader}>
        <View style={styles.backimagewrap}>
          <Image
            style={styles.backimage}
            source={require("../../Assets/back.png")}
          />
        </View>
        <View style={styles.accountTextAlign}>
          <Text style={styles.textFormat1}>Account</Text>
        </View>
        <View style={styles.flex1}></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 80,

          alignItems: "center",
        }}
      >
        <Image
          style={styles.profileimage}
          source={require("../../Assets/profile.png")}
        />

        <View>
          <Text style={styles.textFormat1}>Minguel N.stewart</Text>
          <Text>Member</Text>
        </View>
      </View>

      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate("Profile")}
          icon={() => (
            <Image
              style={styles.icon}
              source={require("../../Assets/Icons/user.png")}
            />
          )}
        ></DrawerItem>
        <DrawerItem
          label="Schedule"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
          icon={() => (
            <Image
              style={styles.icon}
              source={require("../../Assets/Icons/schedule.png")}
            />
          )}
        ></DrawerItem>
        <DrawerItem
          label="Settings"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
          icon={() => (
            <Image
              style={styles.icon}
              source={require("../../Assets/Icons/settings.png")}
            />
          )}
        ></DrawerItem>
        <DrawerItem
          label="Logout"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
          icon={() => (
            <Image
              style={styles.icon}
              source={require("../../Assets/Icons/logout.png")}
            />
          )}
        ></DrawerItem>
      </DrawerContentScrollView>
      <View
        style={{
          flexDirection: "row",
          height: 80,

          alignItems: "center",
        }}
      >
        <Image
          style={styles.profileimage}
          source={require("../../Assets/Logo.png")}
        />

        <View>
          <Text style={styles.textFormat1}>My Black Therapy</Text>
          <Text>Contact : +1(989)-458-1234</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backimage: {
    margin: 10,
    resizeMode: "contain",
    width: "50%",
    height: "50%",
  },
  profileimage: {
    margin: 10,
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  accountTextAlign: {
    justifyContent: "center",
  },
  textFormat1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  sidebarHeader: {
    backgroundColor: colors.gold,
    height: 70,
    flexDirection: "row",
  },
  flex1: {
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  backimagewrap: {
    justifyContent: "center",
    flex: 1,
  },
});

export default CustomSidebarMenu;
