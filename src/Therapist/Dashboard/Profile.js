// import React, { useEffect } from "react";

// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import colors from "../../Constants/colors";
// import DashboardHeader from "../../Components/Headers/DashboardHeader";
// let DATA = [
//   {
//     name: "John Alex",
//     passion: "Therapist",

//     Description: [
//       "This is my description of therapy, i am a profesiional and looking for therapy job",
//     ],
//   },
//   {
//     name: "John Alexer",
//     passion: "Therapist",
//     Description: [
//       "This is my description of therapy, i am a profesiional and looking for therapy job",
//     ],
//   },
//   {
//     name: "John Alexe",
//     passion: "Therapist",
//     Description: [
//       "This is my description of therapy, i am a profesiional and looking for therapy job",
//     ],
//   },
//   {
//     name: "John Alexw",
//     passion: "Therapist",
//     Description: [
//       "This is my description of therapy, i am a profesiional and looking for therapy job",
//     ],
//   },
// ];
// const Profile = (props) => {
//   useEffect(() => {
//     console.log("balled");
//   }, []);
//   const renderItem = ({ item }) => (
//     <View style={{ padding: 10, backgroundColor: "white", margin: 5 }}>
//       <View
//         style={{
//           flexDirection: "row",
//           height: 60,

//           alignItems: "center",
//         }}
//       >
//         <Image
//           style={styles.profileimage}
//           source={require("../../Assets/profile.png")}
//         />

//         <View>
//           <Text style={styles.textFormat1}>Minguel N.stewart</Text>
//           <Text style={{ color: colors.grey }}>Member</Text>
//         </View>
//       </View>
//       <Text
//         style={{
//           color: colors.grey,
//           borderBottomColor: colors.grey,
//           borderBottomWidth: 0.8,
//           paddingBottom: 10,
//           fontSize: 14,
//         }}
//       >
//         {item.Description}
//       </Text>

//       <Image
//         style={styles.communityImage}
//         source={require("../../Assets/Community.png")}
//       />

//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       >
//         <Text>Like</Text>
//         <Image
//           style={styles.bottomimage}
//           source={require("../../Assets/like.png")}
//         />

//         <Text>Comment</Text>
//         <Image
//           style={styles.bottomimage}
//           source={require("../../Assets/comment.png")}
//         />
//       </View>
//     </View>
//   );
//   return (
//     <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
//       <View style={styles.Container}>
//         <TouchableOpacity
//           onPress={() => {
//             // props.navigate.pop();
//             console.log(props.navigation.navigate("Tabs"));
//           }}
//           style={styles.drawerIconContainer}
//         >
//           <Image
//             style={{
//               tintColor: "black",
//               resizeMode: "contain",
//               width: 30,
//               height: 30,
//             }}
//             source={require("../../Assets/back.png")}
//           />
//         </TouchableOpacity>

//         <View style={styles.TitleContainer}>
//           <Text style={styles.titleTxt}>Profile</Text>
//         </View>
//         <TouchableOpacity
//           onPress={() => {
//             props.navigate.navigate("Store");
//           }}
//           style={[
//             styles.drawerIconContainer,
//             { alignItems: "flex-end", paddingRight: 20 },
//           ]}
//         >
//           <Image
//             style={{
//               tintColor: "black",
//               resizeMode: "contain",
//               width: 30,
//               height: 30,
//             }}
//             source={require("../../Assets/cart.png")}
//           />
//         </TouchableOpacity>
//       </View>
//       <ScrollView>
//         <View
//           style={{
//             flex: 1,

//             paddingTop: 30,

//             alignItems: "center",
//           }}
//         >
//           <Image
//             style={styles.profileimage}
//             source={require("../../Assets/profile.png")}
//           />
//           <Text style={{ paddingTop: 5 }}>LCSW</Text>
//           <Text style={{ paddingTop: 5, color: "#DFAF5E" }}>812-123-987</Text>
//         </View>
//         <View style={{ paddingTop: 10 }}>
//           <View style={{ padding: 10 }}>
//             <Text style={{ fontWeight: "bold", paddingTop: 15 }}>About</Text>
//             <Text>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
//               a, habitant fringilla malesuada. Amet sed nibh nulla ullamcorper
//               turpis aenean. Vivamus imperdiet nec rhoncus urna mauris nulla.
//               Tortor facilisis purus odio gravida aliquet curabitur. Morbi
//               cursus magnis in velit aliquam lectus. Porta sem sit turpis
//             </Text>
//             <Text style={{ fontWeight: "bold", paddingTop: 15 }}>
//               Insurance coverage
//             </Text>
//             <View
//               style={{ flexDirection: "row", paddingTop: 2, paddingBottom: 2 }}
//             >
//               <Text style={styles.optionfont}>Accepted</Text>
//             </View>
//             <Text style={{ fontWeight: "bold", paddingTop: 15 }}>
//               Availability
//             </Text>
//             <View
//               style={{ flexDirection: "row", paddingTop: 2, paddingBottom: 2 }}
//             >
//               <Text style={styles.optionfont}>Virtual</Text>
//               <Text style={styles.optionfont}>In Person</Text>
//             </View>
//             <Text style={{ fontWeight: "bold", paddingTop: 15 }}>
//               Specialization
//             </Text>
//             <View
//               style={{ flexDirection: "row", paddingTop: 2, paddingBottom: 2 }}
//             >
//               <Text style={styles.optionfont}>Anxiety and stress</Text>
//               <Text style={styles.optionfont}>Depression</Text>
//               <Text style={styles.optionfont}>PTSD</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1,
//   },
//   drawerIconContainer: {
//     backgroundColor: colors.gold,
//     justifyContent: "center",
//     alignItems: "flex-start",
//     height: 60,
//     flex: 1,
//     paddingLeft: 10,
//   },
//   Container: {
//     backgroundColor: colors.gold,
//     flexDirection: "row",
//   },
//   titleTxt: {
//     textAlign: "center",
//     color: colors.black,
//     fontSize: 22,
//   },
//   TitleContainer: {
//     backgroundColor: colors.gold,
//     justifyContent: "center",
//     alignItems: "center",
//     height: 60,
//     flex: 1.5,
//   },
//   profileimage: {
//     width: 100,
//     height: 100,
//   },
//   optionfont: {
//     fontWeight: "bold",
//     marginRight: 10,
//     backgroundColor: "#61714D",
//     color: "white",
//     borderRadius: 10,
//     fontSize: 11,
//     padding: 5,
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
// });

// export default Profile;
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
          <View style={{ margin: 20, fontSize: 18 }}>
            <Text style={{ fontWeight: "bold" }}>Bio</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              a, habitant fringilla malesuada. Amet sed nibh nulla ullamcorper
              turpis aenean. Vivamus imperdiet nec rhoncus urna mauris nulla.
              Tortor facilisis purus odio gravida aliquet curabitur. Morbi //
              cursus magnis in velit aliquam lectus. Porta sem sit turpis //{" "}
            </Text>
          </View>
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
                source={require("../../Assets/Icons/location.png")}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{}}>Location</Text>
              <TextInput
                style={{ marginTop: -10 }}
                onChangeText={(e) => setemail}
                value={email}
                placeholder="Cape Town"
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
                source={require("../../Assets/Icons/website.png")}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{}}>Website</Text>
              <TextInput
                style={{ marginTop: -10 }}
                onChangeText={(e) => setemail}
                value={email}
                placeholder="www.website.com"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{ padding: 10 }}>
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
