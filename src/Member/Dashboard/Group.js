import React, { useEffect } from "react";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Container, Content, Tabs, Tab } from "native-base";
import colors from "../../Constants/colors";
import { Searchbar } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
let DATA = [
  {
    name: "Adult survivors of Child",
    url: require("../../Assets/Icons/group1.png"),
    url2: require("../../Assets/community2.png"),

    Description: ["9 Members"],
  },
  {
    name: "Black father support",
    url: require("../../Assets/Icons/group1.png"),
    url2: require("../../Assets/Community.png"),

    Description: ["9 Members"],
  },
  {
    name: "Fighting imposter syn...",
    url: require("../../Assets/groups.png"),
    url2: require("../../Assets/grouptab2.png"),

    Description: ["5 Memebers"],
  },
];
let DATA2 = [
  {
    name: "One Day At A Time",
    url: require("../../Assets/grouptab2.png"),
    url2: require("../../Assets/grouptab2.png"),

    Description: ["9 Members"],
  },
];

const Group = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const onsearch = () => {};
  const searchQuery = () => {};
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("GroupFeed");
      }}
      style={{
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        backgroundColor: "white",
      }}
    >
      <ImageBackground source={item.url2} style={styles.backgroundImage}>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 70,
            backgroundColor: "rgba(128, 128, 128, 0.5)",
          }}
        >
          {/* <Image style={styles.profileimage} source={item.url} /> */}
          <View style={{ justifyContent: "center", padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>
              {item.Description}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  const renderItem2 = ({ item }) => (
    <View
      style={{
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        backgroundColor: "white",
      }}
    >
      <ImageBackground
        source={require("../../Assets/Community.png")}
        style={styles.backgroundImage}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 70,
            backgroundColor: "rgba(128, 128, 128, 0.7)",
          }}
        >
          {/* <Image style={styles.profileimage} source={item.url} /> */}
          <View style={{ justifyContent: "center", flex: 2, padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>
              {item.Description}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              marginRight: 5,
            }}
          >
            <Text
              style={{
                backgroundColor: "#B00020",
                padding: 5,

                textAlign: "center",
                color: "white",
                borderRadius: 5,
              }}
            >
              Cancel
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Groups"} />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("CreateGroupForm");
        }}
        style={{ margin: 20, backgroundColor: colors.tone1, padding: 15 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          CREATE GROUPS
        </Text>
      </TouchableOpacity>
      <Container style={{ margin: 10, backgroundColor: "#EAF0EB" }}>
        <Content>
          <Tabs style={{ margin: 10, backgroundColor: "red" }}>
            <Tab
              heading={"Search"}
              tabStyle={{ backgroundColor: "#EAF0EB" }}
              textStyle={{ color: colors.black }}
              activeTabStyle={{
                borderColor: colors.tone1,
                backgroundColor: colors.white,
              }}
              activeTextStyle={{
                color: colors.tone1,
                fontWeight: "normal",
              }}
            >
              <View
                style={{
                  margin: 20,
                  flexDirection: "row",
                  // justifyContent: "center",
                  // alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Searchbar
                  style={{ width: "90%" }}
                  placeholder="Search"
                  onChangeText={onsearch()}
                  value={searchQuery()}
                />
                <Image
                  style={[styles.bottomimage, { width: "10%" }]}
                  source={require("../../Assets/Icons/filter.png")}
                />
              </View>
            </Tab>
            <Tab
              heading={"Joined"}
              tabStyle={{ backgroundColor: colors.white }}
              textStyle={{ color: colors.black }}
              activeTabStyle={{
                borderColor: colors.tone1,
                backgroundColor: colors.white,
              }}
              activeTextStyle={{
                color: colors.tone1,
                fontWeight: "normal",
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingTop: 20,
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
            </Tab>
            <Tab
              heading={"Pending"}
              tabStyle={{ backgroundColor: colors.white }}
              textStyle={{ color: colors.black }}
              activeTabStyle={{
                borderColor: colors.tone1,
                backgroundColor: colors.white,
              }}
              activeTextStyle={{
                color: colors.tone1,
                fontWeight: "normal",
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingTop: 20,
                  paddingBottom: 20,
                  backgroundColor: "#EAF0EB",
                }}
              >
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  style={{ marginTop: 20 }}
                  data={DATA2}
                  renderItem={renderItem2}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </Tab>
          </Tabs>
        </Content>
      </Container>
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
    resizeMode: "stretch", // or 'stretch'
  },
});
export default Group;
