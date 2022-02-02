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

const Cart = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const onsearch = () => {};
  const searchQuery = () => {};

  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Cart"} />

      <View
        style={{
          flex: 1,
          margin: 20,
          backgroundColor: "#EAF0EB",
        }}
      >
        <Text style={{ fontFamily: "Roboto-Black" }}>Your Items</Text>
        <View
          style={{
            backgroundColor: "rgba(33, 33, 33, 0.08)",
            flexDirection: "row",
            marginTop: 10,
            padding: 5,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 10,
              borderWidth: 2,
              width: 20,
              height: 20,
              margin: 10,
            }}
          ></View>
          <Image
            style={[styles.bottomimage, { width: 60, height: 60 }]}
            source={require("../../Assets/brandShirt.png")}
          />
          <View>
            <Text style={{ fontFamily: "Roboto-Black" }}>Brand Tshirt</Text>
            <Text style={{ color: "#61714D" }}>$10.90</Text>
          </View>
          <View style={{ backgroundColor: "#B00020", marginLeft: 100 }}>
            <Image
              style={[
                styles.bottomimage,
                {
                  width: 20,
                  height: 20,
                  //   marginLeft: 100,
                },
              ]}
              source={require("../../Assets/Icons/delete.png")}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "rgba(33, 33, 33, 0.08)",
            flexDirection: "row",
            marginTop: 10,
            padding: 5,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 10,
              borderWidth: 2,
              width: 20,
              height: 20,
              margin: 10,
            }}
          ></View>
          <Image
            style={[styles.bottomimage, { width: 60, height: 60 }]}
            source={require("../../Assets/brandShirt.png")}
          />
          <View>
            <Text style={{ fontFamily: "Roboto-Black" }}>Brand Tshirt</Text>
            <Text style={{ color: "#61714D" }}>$10.90</Text>
          </View>
          <View style={{ backgroundColor: "#B00020", marginLeft: 100 }}>
            <Image
              style={[
                styles.bottomimage,
                {
                  width: 20,
                  height: 20,
                  //   marginLeft: 100,
                },
              ]}
              source={require("../../Assets/Icons/delete.png")}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 10,
                borderWidth: 2,
                width: 20,
                height: 20,
                margin: 10,
              }}
            ></View>
            <Text>Select All</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "right" }}>Total</Text>
            <Text style={{ fontFamily: "Roboto-Black", textAlign: "right" }}>
              US $ 0.00
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "Roboto-Black",
            fontSize: 18,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Payment
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Tabs")}
          style={{
            backgroundColor: colors.gold,
            padding: 15,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>CheckOut</Text>
        </TouchableOpacity>
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
export default Cart;
