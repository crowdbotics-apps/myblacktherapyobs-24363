import React, { useEffect } from "react";

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../../Constants/colors";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
let DATA = [
  {
    name: "Amira Watson",
    passion: "Member",
    url: require("../../Assets/profile3.png"),
    urlcommunity: require("../../Assets/Community.png"),
    Description: "",
  },
  {
    name: "Jonet levit",
    passion: "Therapist",
    url: require("../../Assets/profile4.png"),
    urlcommunity: require("../../Assets/community2.png"),
    Description: [
      "We are our worst critics. The things we say to ourselves are often far more damaging than what..",
    ],
  },
  {
    name: "Jony Ive",
    passion: "Therapist",
    url: require("../../Assets/Community.png"),
    urlcommunity: require("../../Assets/Community.png"),
    Description: [
      "We are our worst critics. The things we say to ourselves are often far more damaging than what..",
    ],
  },
  {
    name: "John Alexw",
    passion: "Therapist",
    url: require("../../Assets/Community.png"),
    urlcommunity: require("../../Assets/Community.png"),
    Description: [
      "We are our worst critics. The things we say to ourselves are often far more damaging than what..",
    ],
  },
];
let Groups = [
  {
    name: "John Alex",
    passion: "Therapist",
    url: require("../../Assets/groups.png"),
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
    members: "1.5K Members",
  },
  {
    name: "John Alexer",
    passion: "Therapist",
    url: require("../../Assets/groups2.png"),
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
    members: "500K Members",
  },
  {
    name: "John Alexe",
    passion: "Therapist",
    url: require("../../Assets/groups.png"),
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
    members: "0",
  },
];
let Shirts = [
  {
    name: "Famil Therapy",

    url: require("../../Assets/familytherapy.png"),
  },
  {
    name: "Black Tshirts",

    url: require("../../Assets/Icons/shirt1.png"),
  },
  {
    name: "Family Therapy",

    url: require("../../Assets/familytherapy.png"),
  },
  {
    name: "Black Shirts",

    url: require("../../Assets/Icons/shirt1.png"),
  },
  {
    name: "Family Therapys",

    url: require("../../Assets/familytherapy.png"),
  },
  {
    name: "Black Shirtss",

    url: require("../../Assets/Icons/shirt1.png"),
  },
];

let Event = [
  {
    name: "Monthly Event",

    url: require("../../Assets/Icons/shirt1.png"),
  },
  {
    name: "Weekly Event",

    url: require("../../Assets/familytherapy.png"),
  },
  {
    name: "Yearly Event",

    url: require("../../Assets/Icons/shirt1.png"),
  },
];
const Community = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const renderItem1 = ({ item }) => (
    <View
      style={{
        paddingRight: 5,
        // marginRight: 10,
      }}
    >
      {item.members == "0" ? (
        <View style={{ backgroundColor: colors.gold }}>
          <Text style={{ padding: 25, textAlign: "center" }}>More Groups</Text>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: "#e4e4e4",
            flexDirection: "row",
            paddingRight: 20,
            borderRadius: 5,
          }}
        >
          <Image style={styles.profileimage} source={item.url} />

          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Adult survivor of childs</Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>{item.members}</Text>
          </View>
        </View>
      )}
    </View>
  );

  const renderItem14 = ({ item }) => (
    <View
      style={{
        paddingRight: 20,
        // marginRight: 10,
      }}
    >
      <View
        style={{
          padding: 10,
          backgroundColor: "#61714d",
          flexDirection: "row",
          paddingRight: 20,
          borderRadius: 5,
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            {item.name}
          </Text>
          <Text style={{ color: "white" }}>Today 12:00PM (60m)</Text>
        </View>
      </View>
    </View>
  );

  const renderItem2 = ({ item }) => (
    <View
      style={{
        marginRight: 10,
        // backgroundColor: "red",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: 5,
          alignItems: "center",
          padding: 10,
        }}
      >
        <Image style={styles.profileimage} source={item.url} />

        <Text style={{ fontSize: 12 }}>{item.name}</Text>
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
        <Image style={styles.profileimage} source={item.url} />

        <View>
          <Text style={styles.textFormat1}>{item.name}</Text>
          <Text style={{ color: colors.grey }}>Member</Text>
        </View>
      </View>
      {item.Description == "" ? null : (
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
      )}
      <Image style={styles.communityImage} source={item.urlcommunity} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.bottomimage}
          source={require("../../Assets/like.png")}
        />
        <Text>Like</Text>
        <View style={{ paddingLeft: 10 }}></View>
        <Image
          style={styles.bottomimage}
          source={require("../../Assets/comment.png")}
        />
        <Text>Comment</Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Community"} />
      <View style={{ marginTop: 20, backgroundColor: "white" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "20%" }}>
            <Image
              style={styles.profileimage}
              source={require("../../Assets/profile.png")}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.5)" }}>
              Lets talk about it
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.5)" }}>Photos</Text>
            <Image
              style={styles.photoMainView}
              source={require("../../Assets/Icons/photos.png")}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.5)" }}>GIF</Text>
            <Image
              style={styles.photoMainView}
              source={require("../../Assets/Icons/GIF.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.textFormat1, { margin: 20, marginTop: 10 }]}>
        My Groups
      </Text>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          margin: 10,
          marginTop: 0,
        }}
        data={Groups}
        renderItem={renderItem1}
        keyExtractor={(item) => item.name}
      />
      <Text style={[styles.textFormat1, { margin: 20, marginTop: 10 }]}>
        Store Deals
      </Text>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ margin: 10, marginTop: 0 }}
        data={Shirts}
        contentInset={{ right: 20, top: 0, left: 0, bottom: 0 }}
        renderItem={renderItem2}
        keyExtractor={(item) => item.name}
      />
      <Text style={[styles.textFormat1, { margin: 20, marginTop: 10 }]}>
        Live Events
      </Text>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ margin: 10, marginTop: 0 }}
        data={Event}
        renderItem={renderItem14}
        keyExtractor={(item) => item.name}
      />
      <Text style={[styles.textFormat1, { margin: 20, marginTop: 10 }]}>
        New Posts
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ margin: 10, marginTop: 0 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileimage: {
    resizeMode: "contain",
    width: 30,
    height: 30,

    alignSelf: "center",
  },
  postprofileimage: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    marginRight: 10,
    alignSelf: "center",
  },
  backimage: {
    margin: 10,
    resizeMode: "contain",
    width: "50%",
    height: "50%",
  },
  profileimage: {
    margin: 10,
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  communityImage: {
    width: "100%",
    height: 150,
    resizeMode: "stretch",
  },
  bottomimage: {
    margin: 10,
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  photoMainView: {
    resizeMode: "contain",
    width: 20,
    height: 20,
    marginLeft: 5,
    alignSelf: "center",
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
});

export default Community;
