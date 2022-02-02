import React, { useEffect } from "react";
import Colors from "../../../Constants/colors";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
import TouchableButton from "../../../Components/TouchableButton";
import colors from "../../../Constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AuthHeader from "../../../Components/Headers/AuthHeader";
const Login = (props) => {
  const [checked, setChecked] = React.useState("unchecked");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.gold} barStyle="red" />
      <AuthHeader navigate={props.navigation} />
      <View style={styles.flexContainer}>
        <Text style={[styles.textFormat1, { paddingBottom: 20 }]}>
          Member Login
        </Text>
      </View>

      {/* second */}
      <View style={styles.flexContainer}>
        <TextInput
          style={{ paddingTop: 5 }}
          mode="outlined"
          label="Email"
          theme={{ colors: { primary: Colors.tone1 } }}
        />
        <TextInput
          style={{ paddingTop: 5 }}
          mode="outlined"
          label="Password"
          theme={{ colors: { primary: Colors.tone1 } }}
          secureTextEntry={true}
        />
        <Text
          onPress={() => props.navigation.navigate("Reset")}
          style={styles.resetText}
        >
          Reset password
        </Text>
      </View>

      {/* third */}

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
            color={colors.gold}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>

        <TouchableButton
          placeholder={"LOG IN"}
          propColor={Colors.gold}
          onPress={() => props.navigation.navigate("Home")}
        />
        <Text
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            textAlign: "center",
            fontFamily: "Roboto-Regular",
          }}
        >
          Or
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderColor: Colors.gold,
            borderWidth: 1,
            padding: 10,
          }}
          onPress={{}}
        >
          <View style={styles.googleIconWrap}>
            <Image
              style={styles.google}
              source={require("../../../Assets/Icons/Google.png")}
            />
          </View>
          <View style={styles.googleTextWrap}>
            <Text style={styles.googletext}>Log IN WITH GOOGLE </Text>
          </View>
          <View style={styles.googleIconWrap}></View>
        </TouchableOpacity>
        <Text style={styles.joinText}>
          Not Joined yet?
          <Text
            onPress={() => props.navigation.navigate("Register")}
            style={styles.createBtn}
          >
            {" "}
            Create an account
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dim,
    padding: wp(5),
  },
  firstContainer: { flex: 1, justifyContent: "center" },
  innerContainer: {
    padding: 10,
  },
  textFormat1: {
    color: Colors.black,
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: "Roboto-Black",
    marginTop: 25,
  },
  textFormat2: {
    color: Colors.black,
    fontSize: wp(8),
    fontWeight: "bold",
    marginBottom: 15,
  },
  resetText: {
    marginTop: 10,
    fontStyle: "italic",
    fontSize: wp(4),
    color: Colors.tone1,
    textAlign: "right",
  },
  joinText: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: wp(4),
  },
  createBtn: {
    color: Colors.tone1,
  },
  rememberText: {
    fontSize: 16,
  },
  google: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  googleIconWrap: {
    width: "25%",
  },
  googletext: {
    color: Colors.gold,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  googleTextWrap: {
    width: "50%",
  },
});
export default Login;
