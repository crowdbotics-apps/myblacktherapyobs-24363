import React, { useEffect } from "react";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import TouchableButton from "../../Components/TouchableButton";
import { Container, Content, Tabs, Tab } from "native-base";
import colors from "../../Constants/colors";
import { Searchbar } from "react-native-paper";
let DATA = [
  {
    name: "Adult servivors of childs",
    url: require("../../Assets/groups2.png"),
    Description: ["9 Members"],
  },
  // {
  //   name: "Black Father support",
  //   url: require("../../Assets/groups.png"),
  //   Description: ["5 Memebers"],
  // },
  // {
  //   name: "Fighting imposter sync",
  //   url: require("../../Assets/groups.png"),
  //   Description: ["6 Members"],
  // },
];
const CreateGroup = (props) => {
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
      }}
    >
      <ImageBackground
        source={require("../../Assets/Community.png")}
        imageStyle={{ borderRadius: 10 }}
        style={styles.backgroundImage}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 60,
            borderRadius: 10,
            backgroundColor: "rgba(128, 128, 128, 0.3)",
          }}
        >
          <Image style={styles.profileimage} source={item.url} />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>
              {item.Description}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Create Groups"} />
      <Searchbar
        style={{ margin: 20 }}
        placeholder="Search"
        onChangeText={onsearch()}
        value={searchQuery()}
      />
      <TouchableButton
        placeholder={"Create Group"}
        propColor={colors.tone1}
        onPress={() => props.navigation.navigate("CreateGroupForm")}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          padding: 20,
          paddingBottom: 0,
        }}
      >
        Your Groups
      </Text>
      <View
        style={{
          flex: 1,
          margin: 20,
          marginTop: 0,
          paddingBottom: 20,
          backgroundColor: "#EAF0EB",
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
  backgroundImage: {
    flex: 1,
    backgroundColor: "white",
    resizeMode: "stretch", // or 'stretch'
  },
});
export default CreateGroup;
