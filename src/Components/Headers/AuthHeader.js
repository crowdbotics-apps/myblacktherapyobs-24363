import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../Constants/colors";

const AuthHeader = (props) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          props.navigate.pop();
        }}
        style={styles.drawerIconContainer}
      >
        <Image
          style={{
            tintColor: "black",
            resizeMode: "contain",
            width: 40,
            height: 40,
          }}
          source={require("../../Assets/back.png")}
        />
      </TouchableOpacity>

      <View style={styles.TitleContainer}></View>
      <TouchableOpacity
        style={[
          styles.drawerIconContainer,
          { alignItems: "flex-end", paddingRight: 20 },
        ]}
      ></TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  drawerIconContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    height: 50,
    flex: 1,
    paddingLeft: 0,
  },
  Container: {
    flexDirection: "row",
  },
  titleTxt: {
    textAlign: "center",
    color: colors.black,
    fontSize: 22,
  },
  TitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flex: 1,
  },
});

export default AuthHeader;
