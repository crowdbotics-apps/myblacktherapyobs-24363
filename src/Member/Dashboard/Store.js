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
    name: "Brand Tshirt",
    url: require("../../Assets/brandShirt.png"),
    Description: ["Quiz and self Assesments"],
    phone: "123-123-2312",
    price: "$10.90",
  },
  {
    name: "Family Therapy",
    url: require("../../Assets/familytherapy.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
    phone: "456-233-7772",
    price: "$9.90",
  },
  {
    name: "Family Therapy",
    url: require("../../Assets/familytherapy.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
    phone: "456-233-7772",
    price: "$9.90",
  },
  {
    name: "Brand Tshirt",
    url: require("../../Assets/brandShirt.png"),
    Description: ["Quiz and self Assesments"],
    phone: "123-123-2312",
    price: "$10.90",
  },
];
const Store = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const onsearch = () => {};
  const searchQuery = () => {};
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("StoreDetail")}
      style={{
        borderRadius: 10,
        flex: 1,
        backgroundColor: "#F4F4F4",
        margin: 10,
        height: 140,

        justifyContent: "center",
        borderColor: "red",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <Image style={styles.profileimage} source={item.url} />
      <View style={{ flexDirection: "row" }}>
        <View style={{ padding: 10, width: "70%" }}>
          <Text style={{ color: "#646E77", fontSize: 12, textAlign: "left" }}>
            {item.name}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 12,
              textAlign: "left",
            }}
          >
            {item.price}
          </Text>
        </View>
        <View style={{ padding: 10, width: "30%" }}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../Assets/addToCart.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Store"} />

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
          placeholder="Search store"
          onChangeText={onsearch()}
          value={searchQuery()}
        />

        <Text style={{ marginLeft: 20, fontWeight: "bold" }}>New Products</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ margin: 20 }}
          numColumns={2}
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
    padding: 10,
    resizeMode: "contain",
    width: "100%",
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
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default Store;
