import React, { useEffect } from "react";
import Colors from "../../../Constants/colors";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
import TouchableButton from "../../../Components/TouchableButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AuthHeader from "../../../Components/Headers/AuthHeader";
const Register = (props) => {
  const [checked, setChecked] = React.useState("first");

  return (
    <View style={styles.container}>
      <AuthHeader navigate={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* first */}
        <View style={styles.firstContainer}>
          <Text style={styles.textFormat1}>Member</Text>
          <Text style={styles.textFormat2}>SignUp</Text>
        </View>

        {/* second */}
        <View style={{ flex: 0.7 }}>
          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="First Name"
            theme={{ colors: { primary: Colors.tone1 } }}
          />
          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="Last Name"
            theme={{ colors: { primary: Colors.tone1 } }}
          />
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
          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="Confrim Password"
            theme={{ colors: { primary: Colors.tone1 } }}
            secureTextEntry={true}
          />

          <Text style={styles.policyText}>
            By signing up you agree with our
            <Text style={styles.btnPolicy}> Terms & Conditions</Text>
            <Text> and</Text>
            <Text style={styles.btnPolicy}> Privacy Policy</Text>{" "}
          </Text>

          <TouchableButton
            placeholder={"SIGN UP"}
            propColor={Colors.gold}
            onPress={() => props.navigation.navigate("Login")}
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
              <Text style={styles.googletext}>SIGN UP WITH GOOGLE </Text>
            </View>
            <View style={styles.googleIconWrap}></View>
          </TouchableOpacity>
          <Text style={styles.joinText}>
            Already joined?
            <Text
              onPress={() => {
                props.navigation.navigate("Login");
              }}
              style={styles.createBtn}
            >
              {" "}
              Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dim,
    padding: wp(5),
  },
  firstContainer: {
    flex: 0.3,
    justifyContent: "center",
  },

  textFormat1: {
    color: Colors.black,
    fontSize: wp(8),
    fontWeight: "bold",
    marginTop: 25,
  },
  textFormat2: {
    color: Colors.black,
    fontSize: wp(8),
    fontWeight: "bold",
    marginBottom: 15,
  },

  joinText: {
    marginTop: hp(3),
    alignSelf: "center",
    fontSize: wp(3.5),
  },
  createBtn: {
    color: Colors.tone1,
  },
  policyText: {
    marginVertical: hp(2),
    fontSize: wp(3),
  },
  btnPolicy: {
    fontWeight: "bold",
    color: Colors.black,
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
export default Register;
