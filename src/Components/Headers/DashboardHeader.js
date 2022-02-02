import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../Constants/colors";

const DashboardHeader = (props) => {
  console.log("hhe", props.navigate);
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          // props.navigate.pop();
          console.log(props.navigate.toggleDrawer());
        }}
        style={styles.drawerIconContainer}
      >
        <Image
          style={{
            tintColor: "black",
            resizeMode: "contain",
            width: 30,
            height: 30,
          }}
          source={require("../../Assets/info.png")}
        />
      </TouchableOpacity>

      <View style={styles.TitleContainer}>
        <Text style={styles.titleTxt}>{props.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigate.navigate("Store");
        }}
        style={[
          styles.drawerIconContainer,
          { alignItems: "flex-end", paddingRight: 20 },
        ]}
      >
        <Image
          style={{
            tintColor: "black",
            resizeMode: "contain",
            width: 30,
            height: 30,
          }}
          source={require("../../Assets/cart.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  drawerIconContainer: {
    backgroundColor: colors.gold,
    justifyContent: "center",
    alignItems: "flex-start",
    height: 60,
    flex: 1,
    paddingLeft: 10,
  },
  Container: {
    backgroundColor: colors.gold,
    flexDirection: "row",
  },
  titleTxt: {
    textAlign: "center",
    color: colors.black,
    fontSize: 22,
    fontFamily: "Roboto-Black",
  },
  TitleContainer: {
    backgroundColor: colors.gold,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flex: 1.5,
  },
});

export default DashboardHeader;
