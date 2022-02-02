import React, { useEffect } from "react";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Container, Content, Tabs, Tab } from "native-base";
import colors from "../../Constants/colors";
import { Searchbar } from "react-native-paper";
let DATA = [
  {
    name: "James Brown, LSCW",
    url: require("../../Assets/Profile2.png"),
    Description: ["Quiz and self Assesments"],
    data: ["Trauma", "Stress"],
    phone: "123-123-2312",
  },
  {
    name: "Dayna Hughes , Psyd",
    url: require("../../Assets/profile5.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
    data: ["Depression", "Homocide", "family", "cristian"],
    phone: "456-233-7772",
  },
  {
    name: "Lucas Tenet, LPC",
    url: require("../../Assets/profile6.png"),
    Description: ["Reflective Guides for Journoling"],
    data: ["Depression", "Homocide", "family", "manic depression"],
    phone: "876-2323-332",
  },
];
const Directory = (props) => {
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
        backgroundColor: "#E5E5E5",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.profileimage} source={item.url} />
        <View style={{ justifyContent: "center", flex: 2 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.optionfont}>Virtual</Text>
            <Text style={styles.optionfont}>In-Person</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={[styles.optionfont, { backgroundColor: colors.gold }]}>
              Virtual
            </Text>
            <Text style={[styles.optionfont, { backgroundColor: colors.gold }]}>
              In-Person
            </Text>
          </View>
          <Text style={{ fontWeight: "bold" }}>{item.phone}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              backgroundColor: "#6D152B",
              padding: 5,
              textAlign: "center",
              color: "white",
              borderRadius: 5,
            }}
          >
            Contact
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Directory"} />

      <View
        style={{
          flex: 1,
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "#EAF0EB",
        }}
      >
        <Searchbar
          style={{ margin: 20 }}
          placeholder="Search by location"
          onChangeText={onsearch()}
          value={searchQuery()}
        />
        <Searchbar
          style={{ margin: 20, marginTop: 0 }}
          placeholder="Search by category"
          onChangeText={onsearch()}
          value={searchQuery()}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ margin: 20 }}
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
  optionfont: {
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#61714D",
    color: "white",
    borderRadius: 10,
    fontSize: 11,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default Directory;
