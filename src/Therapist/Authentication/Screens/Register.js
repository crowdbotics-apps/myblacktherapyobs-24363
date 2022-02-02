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
import colors from "../../../Constants/colors";
import { TextInput, RadioButton } from "react-native-paper";
import TouchableButton from "../../../Components/TouchableButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AuthHeader from "../../../Components/Headers/AuthHeader";
const Register = (props) => {
  const [checked, setChecked] = React.useState("unchecked");
  const [checked2, setChecked2] = React.useState("unchecked");
  const [Continue, setContinue] = React.useState(false);

  return (
    <View style={styles.container}>
      <AuthHeader navigate={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* first */}
        <View style={styles.firstContainer}>
          <Text style={styles.textFormat1}>Therapist</Text>
          <Text style={styles.textFormat2}>SignUp</Text>
        </View>

        {/* second */}
        <View style={{ flex: 0.7 }}>
          {Continue == false ? (
            <View>
              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="Email"
                theme={{ colors: { primary: Colors.tone1 } }}
              />
              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="Phone No"
                theme={{ colors: { primary: Colors.tone1 } }}
              />

              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="Password"
                theme={{ colors: { primary: Colors.tone1 } }}
                secureTextEntry={true}
              />
            </View>
          ) : (
            <View>
              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="Full Name"
                theme={{ colors: { primary: Colors.tone1 } }}
              />
              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="License No"
                theme={{ colors: { primary: Colors.tone1 } }}
              />
              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="License Type"
                theme={{ colors: { primary: Colors.tone1 } }}
              />
              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="Date of Birth"
                theme={{ colors: { primary: Colors.tone1 } }}
              />
              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="State(s) Licensed"
                theme={{ colors: { primary: Colors.tone1 } }}
              />
              <TextInput
                style={{ paddingTop: 5 }}
                mode="outlined"
                label="Website"
                theme={{ colors: { primary: Colors.tone1 } }}
              />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
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
                  <Text style={styles.rememberText}>Female</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <RadioButton
                    value="second"
                    status={checked2 === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked2("second")}
                    color={colors.gold}
                  />
                  <Text style={styles.rememberText}>Male</Text>
                </View>
              </View>
            </View>
          )}
          <Text style={styles.policyText}>
            By signing up you agree with our
            <Text style={styles.btnPolicy}> Terms & Conditions</Text>
            <Text> and</Text>
            <Text style={styles.btnPolicy}> Privacy Policy</Text>{" "}
          </Text>

          <TouchableButton
            placeholder={Continue == true ? "SIGN UP" : "Continue"}
            propColor={Colors.gold}
            onPress={() =>
              Continue == true
                ? props.navigation.navigate("Login")
                : setContinue(true)
            }
          />
          <Text style={styles.joinText}>
            Already joined?
            <Text onPress={() => {}} style={styles.createBtn}>
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
});
export default Register;
