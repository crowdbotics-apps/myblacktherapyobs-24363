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

const StoreDetail = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const onsearch = () => {};
  const searchQuery = () => {};

  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Store"} />

      <View
        style={{
          flex: 1,
          margin: 20,
          backgroundColor: "#EAF0EB",
        }}
      >
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "stretch" }}
            source={require("../../Assets/brandShirt.png")}
          />
        </View>
        <View
          style={{ backgroundColor: "#F8F8F9", padding: 20, borderRadius: 10 }}
        >
          <Text style={{ fontFamily: "Roboto-Black" }}>Brand Tshirt</Text>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Image
              style={styles.textRating}
              source={require("../../Assets/Icons/FilledStart.png")}
            />
            <Image
              style={styles.textRating}
              source={require("../../Assets/Icons/FilledStart.png")}
            />
            <Image
              style={styles.textRating}
              source={require("../../Assets/Icons/FilledStart.png")}
            />
            <Image
              style={styles.textRating}
              source={require("../../Assets/Icons/Start.png")}
            />
            <Image
              style={styles.textRating}
              source={require("../../Assets/Icons/Start.png")}
            />
            <Text style={{ fontSize: 12, paddingLeft: 10 }}>3.8 |</Text>
            <Text style={{ fontSize: 12, paddingLeft: 10, color: "#3573AA" }}>
              137 Reviews
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Roboto-Black",
              fontSize: 18,
              paddingTop: 10,
            }}
          >
            $10.90
          </Text>
          <Text
            style={{
              fontSize: 18,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Description
          </Text>
          <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet a
            accumsan sit tellus. Quis massa volutpat venenatis enim rhoncus.
            Ultrices nibh vitae a diam
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
            style={{
              backgroundColor: colors.gold,
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textRating: {
    width: 15,
    height: 15,
    resizeMode: "stretch",
  },
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
export default StoreDetail;
