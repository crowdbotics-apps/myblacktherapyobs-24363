import React, { useEffect } from "react";

import DashboardHeader from "../../Components/Headers/DashboardHeader";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TouchableButton from "../../Components/TouchableButton";
import { Container, Content, Tabs, Tab } from "native-base";
import colors from "../../Constants/colors";
import Colors from "../../Constants/colors";
import { TextInput, RadioButton } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const CreateGroupForm = (props) => {
  const [checked, setChecked] = React.useState("unchecked");
  const [checked2, setChecked2] = React.useState("unchecked");
  const [Continue, setContinue] = React.useState(false);

  return (
    // <View>
    //
    <ScrollView
      style={{}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <DashboardHeader
        style={{ padding: wp(-15) }}
        navigate={props.navigation}
        title={"Create Groups"}
      />
      {/* first */}
      <View style={{ padding: wp(5) }}>
        <View style={styles.firstContainer}>
          <Text style={styles.textFormat1}>Group details</Text>
        </View>

        {/* second */}

        <View>
          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="Group Name"
            theme={{ colors: { primary: Colors.tone1 } }}
          />
          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="Full Name"
            theme={{ colors: { primary: Colors.tone1 } }}
          />
          <Text style={{ color: "grey", paddingTop: 10 }}>Group Lead</Text>
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
              <Text style={styles.rememberText}>Peer-led</Text>
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
              <Text style={styles.rememberText}>Therapist-led</Text>
            </View>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
            }}
            onChangeText={(e) => console.log(e)}
            value={""}
            placeholder="Why do you want to create this group?"
            keyboardType="numeric"
          />
          <Text style={{ color: "grey", paddingTop: 10 }}>Group Type</Text>
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
              <Text style={styles.rememberText}>Open</Text>
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
              <Text style={styles.rememberText}>Closed</Text>
            </View>
          </View>
          <Text style={{ color: "grey", paddingTop: 10 }}>
            Allor anonymous Post
          </Text>
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
              <Text style={styles.rememberText}>Yes</Text>
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
              <Text style={styles.rememberText}>No</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.tone2,
                flex: 1,
                justifyContent: "center",
                height: 50,
                marginRight: 5,
              }}
              onPress={() => {}}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Add Cover Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.tone2,
                flex: 1,
                justifyContent: "center",
                height: 50,
                marginRight: 5,
              }}
              onPress={() => {}}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Add Display Photo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 15 }}>
            <Text>Ask Question</Text>
            <TextInput
              style={{ paddingTop: 5 }}
              mode="outlined"
              label="Question 1"
              theme={{ colors: { primary: Colors.tone1 } }}
            />
            <TextInput
              style={{ paddingTop: 5 }}
              mode="outlined"
              label="Question 2"
              theme={{ colors: { primary: Colors.tone1 } }}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                flex: 1,
                justifyContent: "center",
                height: 50,
                marginRight: 5,
              }}
              onPress={() => {}}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.tone1,
                flex: 1,
                justifyContent: "center",
                height: 50,
                marginRight: 5,
              }}
              onPress={() => {}}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.tone1,
              flex: 1,
              justifyContent: "center",
              height: 50,
              marginRight: 5,
              marginTop: 10,
            }}
            onPress={() => {}}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    // </View>
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
    fontSize: wp(5),
    fontWeight: "bold",
    marginTop: 15,
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
export default CreateGroupForm;
