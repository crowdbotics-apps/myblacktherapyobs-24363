import React, { useEffect } from "react";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
import { Container, Content, Tabs, Tab } from "native-base";
import colors from "../../Constants/colors";
import Colors from "../../Constants/colors";
import { Searchbar } from "react-native-paper";

const StartConference = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const onsearch = () => {};
  const searchQuery = () => {};

  return (
    <ImageBackground
      source={require("../../Assets/p4.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          margin: 10,
        }}
      >
        <Image
          style={styles.profileimage}
          source={require("../../Assets/Icons/videooff.png")}
        />
        <Image
          style={styles.profileimage}
          source={require("../../Assets/Icons/video_mic.png")}
        />
        <Image
          style={styles.profileimage}
          source={require("../../Assets/Icons/videochat.png")}
        />
        <Image
          style={[styles.profileimage, { tintColor: "red" }]}
          source={require("../../Assets/Icons/video_phone.png")}
        />
      </View>
    </ImageBackground>
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
    flex: 1,
    resizeMode: "contain",
    width: 40,
    height: 40,
    tintColor: Colors.tone1,
  },
  bottomimage: {
    margin: 10,
    resizeMode: "contain",
    width: 20,
    height: 20,
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
    fontSize: 16,
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
export default StartConference;
