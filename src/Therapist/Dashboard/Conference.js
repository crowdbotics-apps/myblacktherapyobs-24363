import React, { useEffect } from "react";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Container, Content, Tabs, Tab } from "native-base";
import colors from "../../Constants/colors";
import { Searchbar } from "react-native-paper";
let DATA = [
  {
    name: "Self-Tests",
    url: require("../../Assets/Icons/SELFTESTSicon.png"),
    Description: ["Quiz and self Assesments"],
  },
  {
    name: "Breathing Exercises",
    url: require("../../Assets/Icons/BreathingExercises.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
  },
  {
    name: "Journal Prompts",
    url: require("../../Assets/Icons/JournalPrompts.png"),
    Description: ["Reflective Guides for Journoling"],
  },
  {
    name: "Meditation",
    url: require("../../Assets/Icons/Meditation.png"),
    Description: ["Guided Meditation and affertions"],
  },
];
const Conference = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const onsearch = () => {};
  const searchQuery = () => {};
  const renderItem = ({ item }) => (
    <View
      style={{
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.profileimage} source={item.url} />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
          <Text style={{ fontSize: 12, color: "grey" }}>
            {item.Description}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Conference"} />

      <View
        style={{
          flex: 1,
          margin: 20,
          backgroundColor: "#EAF0EB",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "grey", padding: 60, paddingBottom: 20 }}>
          There are no video conference at the moment, Please create one
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: colors.tone1,

            justifyContent: "center",
            height: 50,
            marginRight: 5,
            marginTop: 10,
          }}
          onPress={() => {
            props.navigation.navigate("ConferenceForm");
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Create Conference
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    width: 60,
    height: 60,
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
export default Conference;
