import React, { useEffect } from "react";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Container, Content, Tabs, Tab, Col } from "native-base";
import colors from "../../Constants/colors";
import { Searchbar } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
let DATA1 = [
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
let DATA = [
  {
    name: "Adult servivors of childs",
    url: require("../../Assets/groups.png"),
    Description: ["9 Members"],
  },
  {
    name: "Black Father support",
    url: require("../../Assets/groups.png"),
    Description: ["5 Memebers"],
  },
  {
    name: "Fighting  sync",
    url: require("../../Assets/groups.png"),
    Description: ["6 Members"],
  },
];
let DATA2 = [
  {
    name: "James, LSCW",
    url: require("../../Assets/groups.png"),
    Description: ["Quiz and self Assesments"],
    phone: "123-123-2312",
  },
  {
    name: "Dayna, Psyd",
    url: require("../../Assets/groups.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
    phone: "456-233-7772",
  },
  {
    name: "Lucas, LPC",
    url: require("../../Assets/groups.png"),
    Description: ["Reflective Guides for Journoling"],
    phone: "876-2323-332",
  },
];
let DATA3 = [
  {
    name: "James, LSCW",
    url: require("../../Assets/p1.png"),
    Description: ["Quiz and self Assesments"],
    phone: "123-123-2312",
  },
  {
    name: "Dayna, Psyd",
    url: require("../../Assets/p2.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
    phone: "456-233-7772",
  },
  {
    name: "Lucas, LPC",
    url: require("../../Assets/p3.png"),
    Description: ["Reflective Guides for Journoling"],
    phone: "876-2323-332",
  },
  {
    name: "James, LSCW1",
    url: require("../../Assets/p4.png"),
    Description: ["Quiz and self Assesments"],
    phone: "123-123-2312",
  },
  {
    name: "Dayna, Psyd2",
    url: require("../../Assets/p9.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
    phone: "456-233-7772",
  },
  {
    name: "Lucas, LPC3",
    url: require("../../Assets/p6.png"),
    Description: ["Reflective Guides for Journoling"],
    phone: "876-2323-332",
  },
  {
    name: "James, LSCW11",
    url: require("../../Assets/p7.png"),
    Description: ["Quiz and self Assesments"],
    phone: "123-123-2312",
  },
  {
    name: "Dayna, Psyd22",
    url: require("../../Assets/p8.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
    phone: "456-233-7772",
  },
  {
    name: "Lucas, LPC333",
    url: require("../../Assets/p9.png"),
    Description: ["Reflective Guides for Journoling"],
    phone: "876-2323-332",
  },
  {
    name: "James, LSCW111",
    url: require("../../Assets/p1.png"),
    Description: ["Quiz and self Assesments"],
    phone: "123-123-2312",
  },
  {
    name: "Dayna, Psyd2222",
    url: require("../../Assets/p2.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
    phone: "456-233-7772",
  },
  {
    name: "Lucas, LPC333",
    url: require("../../Assets/p3.png"),
    Description: ["Reflective Guides for Journoling"],
    phone: "876-2323-332",
  },
];
const GroupFeed = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const onsearch = () => {};
  const searchQuery = () => {};
  const renderItem4 = ({ item }) => (
    <View
      style={{
        // borderRadius: 10,
        padding: 10,
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
        marginBottom: 10,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        // backgroundColor: "#E5E5E5",
      }}
    >
      <Image style={styles.profileimage} source={item.url} />
      <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
      <Text style={{ color: "grey" }}>Admin</Text>
    </View>
  );
  const renderItem2 = ({ item }) => (
    <View
      style={{
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        backgroundColor: "#E5E5E5",
      }}
    >
      <ImageBackground
        source={require("../../Assets/Community.png")}
        style={styles.backgroundImage}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 60,
            backgroundColor: "rgba(128, 128, 128, 0.7)",
          }}
        >
          <Image style={styles.profileimage} source={item.url} />
          <View style={{ justifyContent: "center", flex: 2 }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text>{item.Description}</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                backgroundColor: "red",
                padding: 5,
                textAlign: "center",
                color: "white",
                borderRadius: 10,
              }}
            >
              Cancel
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
  const renderItem1 = ({ item }) => (
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
  const renderItem3 = ({ item }) => (
    <View
      style={{
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        backgroundColor: "#E5E5E5",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.profileimage} source={item.url} />
        <View style={{ justifyContent: "center", flex: 2 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <View
            style={{ flexDirection: "row", paddingTop: 2, paddingBottom: 2 }}
          >
            <Text style={{ color: "grey" }}>Today 12:00PM(60m)</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              backgroundColor: colors.gold,
              padding: 5,
              margin: 3,
              textAlign: "center",
              color: "white",
              borderRadius: 5,
            }}
          >
            Remind
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              backgroundColor: "green",
              padding: 5,
              margin: 3,
              textAlign: "center",
              color: "white",
              borderRadius: 5,
            }}
          >
            Join
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Groups"} />

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          style={styles.profileimage}
          source={require("../../Assets/groups.png")}
        />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Adult survivor of childs</Text>
          <Text>9 memeber</Text>
        </View>
      </View>

      <Container style={{ margin: 10, backgroundColor: "#EAF0EB" }}>
        <Content>
          <Tabs style={{ margin: 10, backgroundColor: "red" }}>
            <Tab
              heading={"Feeds"}
              tabStyle={{ backgroundColor: colors.white }}
              textStyle={{ color: colors.black }}
              activeTabStyle={{
                borderColor: colors.tone1,
                backgroundColor: colors.white,
              }}
              activeTextStyle={{
                color: colors.tone1,
                fontWeight: "normal",
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingTop: 20,
                  paddingBottom: 20,
                  backgroundColor: "#EAF0EB",
                }}
              >
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  style={{}}
                  data={DATA1}
                  renderItem={renderItem1}
                  keyExtractor={(item) => item.name}
                />
              </View>
            </Tab>
            <Tab
              heading={"Meetings"}
              tabStyle={{ backgroundColor: colors.white }}
              textStyle={{ color: colors.black }}
              activeTabStyle={{
                borderColor: colors.tone1,
                backgroundColor: colors.white,
              }}
              activeTextStyle={{
                color: colors.tone1,
                fontWeight: "normal",
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingTop: 20,
                  paddingBottom: 20,
                  backgroundColor: "#EAF0EB",
                }}
              >
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  style={{}}
                  data={DATA2}
                  renderItem={renderItem3}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </Tab>
            <Tab
              heading={"Members"}
              tabStyle={{ backgroundColor: colors.white }}
              textStyle={{ color: colors.black }}
              activeTabStyle={{
                borderColor: colors.tone1,
                backgroundColor: colors.white,
              }}
              activeTextStyle={{
                color: colors.tone1,
                fontWeight: "normal",
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingTop: 20,
                  paddingBottom: 20,
                  backgroundColor: "#EAF0EB",
                }}
              >
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  style={{}}
                  numColumns={3}
                  data={DATA3}
                  renderItem={renderItem4}
                  keyExtractor={(item) => item.name}
                />
              </View>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  backimage: {
    margin: 10,
    resizeMode: "contain",
    width: "50%",
    height: "50%",
  },
  profileimage: {
    margin: 10,
    resizeMode: "contain",
    width: 60,
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
  communityImage: {
    width: "100%",
    height: 120,
    resizeMode: "stretch",
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
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch", // or 'stretch'
  },
});
export default GroupFeed;
