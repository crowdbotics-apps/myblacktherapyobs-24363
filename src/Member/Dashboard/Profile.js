import React, { useEffect } from "react";

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import colors from "../../Constants/colors";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
let DATA = [
  {
    name: "John Alex",
    passion: "Therapist",

    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
  },
  {
    name: "John Alexer",
    passion: "Therapist",
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
  },
  {
    name: "John Alexe",
    passion: "Therapist",
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
  },
  {
    name: "John Alexw",
    passion: "Therapist",
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
  },
];
const Profile = (props) => {
  const [email, setemail] = React.useState("");
  useEffect(() => {
    console.log("balled");
  }, []);

  const renderItem2 = ({ item }) => (
    <View style={{ padding: 10, backgroundColor: "white", margin: 5 }}>
      <View
        style={{
          flexDirection: "row",
          height: 60,

          alignItems: "center",
        }}
      >
        <Image
          style={styles.profileimage2}
          source={require("../../Assets/profile.png")}
        />

        <View>
          <Text style={styles.textFormat1}>Minguel N.stewart</Text>
          <Text style={{ color: colors.grey }}>Member</Text>
        </View>
      </View>
      <Text
        style={{
          color: colors.grey,
          borderBottomColor: colors.grey,
          borderBottomWidth: 0.8,
          paddingBottom: 10,
          fontSize: 14,
        }}
      >
        {item.Description}
      </Text>

      <Image
        style={styles.communityImage}
        source={require("../../Assets/Community.png")}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text>Like</Text>
        <Image
          style={styles.bottomimage}
          source={require("../../Assets/like.png")}
        />

        <Text>Comment</Text>
        <Image
          style={styles.bottomimage}
          source={require("../../Assets/comment.png")}
        />
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, backgroundColor: "white", margin: 5 }}>
      <View
        style={{
          flexDirection: "row",
          height: 60,

          alignItems: "center",
        }}
      >
        <Image
          style={styles.profileimage}
          source={require("../../Assets/profile.png")}
        />

        <View>
          <Text style={styles.textFormat1}>Minguel N.stewart</Text>
          <Text style={{ color: colors.grey }}>Member</Text>
        </View>
      </View>
      <Text
        style={{
          color: colors.grey,
          borderBottomColor: colors.grey,
          borderBottomWidth: 0.8,
          paddingBottom: 10,
          fontSize: 14,
        }}
      >
        {item.Description}
      </Text>

      <Image
        style={styles.communityImage}
        source={require("../../Assets/Community.png")}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text>Like</Text>
        <Image
          style={styles.bottomimage}
          source={require("../../Assets/like.png")}
        />

        <Text>Comment</Text>
        <Image
          style={styles.bottomimage}
          source={require("../../Assets/comment.png")}
        />
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <View style={styles.Container}>
        <TouchableOpacity
          onPress={() => {
            // props.navigate.pop();
            console.log(props.navigation.navigate("Tabs"));
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
            source={require("../../Assets/back.png")}
          />
        </TouchableOpacity>

        <View style={styles.TitleContainer}>
          <Text style={styles.titleTxt}>Profile</Text>
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
      <ScrollView>
        <View
          style={{
            flex: 1,

            paddingTop: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,

              alignItems: "center",
            }}
          >
            <Image
              style={styles.profileimage}
              source={require("../../Assets/profile.png")}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Mingual N.StEWART
            </Text>
            <Text style={{ color: "grey" }}>Member</Text>
            <Text
              style={{
                color: "#8FAE93",
                textDecorationLine: "underline",
              }}
            >
              Change Profile
            </Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", padding: 10, paddingTop: 20 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",

                alignItems: "center",
              }}
            >
              <Image
                style={{
                  tintColor: colors.tone2,
                  resizeMode: "contain",
                  width: 30,
                  height: 30,
                }}
                source={require("../../Assets/message.png")}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{}}>Email</Text>
              <TextInput
                style={{ marginTop: -10 }}
                onChangeText={(e) => setemail}
                value={email}
                placeholder="demo@gmail.com"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",

                alignItems: "center",
              }}
            >
              <Image
                style={{
                  tintColor: colors.tone2,
                  resizeMode: "contain",
                  width: 30,
                  height: 30,
                }}
                source={require("../../Assets/Icons/phone.png")}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{}}>Phone Number</Text>
              <TextInput
                style={{ marginTop: -10 }}
                onChangeText={(e) => setemail}
                value={email}
                placeholder="+92 323 234 322"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontSize: 18,
                paddingTop: 10,
                paddingBottom: 10,
                fontWeight: "bold",
              }}
            >
              Your Recent Posts
            </Text>

            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{}}
              data={DATA}
              renderItem={renderItem2}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  communityImage: {
    width: "100%",
    height: 120,
    resizeMode: "stretch",
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
  },
  TitleContainer: {
    backgroundColor: colors.gold,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flex: 1.5,
  },
  profileimage: {
    width: 100,
    height: 100,
  },
  profileimage2: {
    margin: 10,
    resizeMode: "contain",
    width: 50,
    height: 50,
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
  bottomimage: {
    margin: 10,
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
});

export default Profile;
