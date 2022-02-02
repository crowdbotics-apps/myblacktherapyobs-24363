import React, { useEffect } from "react";
import Colors from "../../../Constants/colors";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import TouchableButton from "../../../Components/TouchableButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AuthHeader from "../../../Components/Headers/AuthHeader";
const Reset = (props) => {
  return (
    <View style={styles.container}>
      <AuthHeader navigate={props.navigation} />
      <View style={styles.firstFlex}>
        <Text style={styles.textFormat1}>Reset</Text>
        <Text style={styles.textFormat2}>Password</Text>
        <Text style={styles.enterText}>
          Enter your email to get a password reset link.
        </Text>
      </View>

      {/* second*/}
      <View style={{ flex: 0.6 }}>
        <TextInput
          mode="outlined"
          label="Email"
          theme={{ colors: { primary: Colors.tone1 } }}
        />
        <TouchableButton
          placeholder={"RESET"}
          propColor={Colors.gold}
          onPress={() => console.log("Login Button Pressed")}
        />
        <Text style={styles.joinText}>
          Try<Text style={styles.createBtn}> Log In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.dim,
    padding: wp(5),
  },
  firstFlex: { justifyContent: "center", flex: 0.4 },
  innerContainer: {
    padding: 10,
  },
  textFormat1: {
    color: Colors.black,
    fontSize: wp(8),
    fontWeight: "bold",
    marginTop: wp(5),
  },
  textFormat2: {
    color: Colors.black,
    fontSize: wp(8),
    fontWeight: "bold",
    marginBottom: 10,
  },
  enterText: {
    marginVertical: 5,
    fontSize: wp(4),
    color: Colors.black,
  },
  joinText: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: wp(4),
  },
  createBtn: {
    color: Colors.tone1,
    fontSize: wp(4),
  },
});
export default Reset;
