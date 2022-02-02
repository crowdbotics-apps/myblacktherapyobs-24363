import React, { useEffect, useState } from "react";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { TextInput, RadioButton } from "react-native-paper";
import { Container, Content, Tabs, Tab } from "native-base";
import colors from "../../Constants/colors";
import Colors from "../../Constants/colors";
import { Searchbar } from "react-native-paper";
let DATA = [
  {
    name: "Self-Tests",
    url: require("../../Assets/Icons/SELFTESTSicon.png"),
    Description: ["Quiz and self Assesments"],
  },
  {
    name: "Breathing Exercises",
    url: require("../../Assets/Icons/BreathingExercises.png"),
    Description: ["Simple Breathing Exercises to reduce anxiety "],
  },
  {
    name: "Journal Prompts",
    url: require("../../Assets/Icons/JournalPrompts.png"),
    Description: ["Reflective Guides for Journoling"],
  },
  {
    name: "Meditation",
    url: require("../../Assets/Icons/Meditation.png"),
    Description: ["Guided Meditation and affertions"],
  },
];
const CreatStoreForm = (props) => {
  useEffect(() => {
    console.log("balled");
  }, []);
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs camera permission",
          }
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "External Storage Write Permission",
            message: "App needs write permission",
          }
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert("Write permission err", err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: "low",
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: false,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log("Response = ", response);

        if (response.didCancel) {
          alert("User cancelled camera picker");
          return;
        } else if (response.errorCode == "camera_unavailable") {
          alert("Camera not available on device");
          return;
        } else if (response.errorCode == "permission") {
          alert("Permission not satisfied");
          return;
        } else if (response.errorCode == "others") {
          alert(response.errorMessage);
          return;
        }
        // console.log("base64 -> ", response.base64);
        // console.log("uri -> ", response.uri);
        // console.log("width -> ", response.width);
        // console.log("height -> ", response.height);
        // console.log("fileSize -> ", response.fileSize);
        // console.log("type -> ", response.type);
        // console.log("fileName -> ", response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log("Responsed = ", response);

      if (response.didCancel) {
        alert("User cancelled camera picker");
        return;
      } else if (response.errorCode == "camera_unavailable") {
        alert("Camera not available on device");
        return;
      } else if (response.errorCode == "permission") {
        alert("Permission not satisfied");
        return;
      } else if (response.errorCode == "others") {
        alert(response.errorMessage);
        return;
      }
      // console.log("base64 -> ", response.base64);
      // console.log("uri -> ", response.uri);
      // console.log("width -> ", response.width);
      // console.log("height -> ", response.height);
      // console.log("fileSize -> ", response.fileSize);
      // console.log("type -> ", response.type);
      // console.log("fileName -> ", response.fileName);
      setFilePath(response);
    });
  };
  const onsearch = () => {};
  const searchQuery = () => {};
  const renderItem = ({ item }) => (
    <View
      style={{
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.profileimage} source={item.url} />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
          <Text style={{ fontSize: 12, color: "grey" }}>
            {item.Description}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#EAF0EB" }}>
      <DashboardHeader navigate={props.navigation} title={"Store"} />

      <ScrollView
        style={{
          flex: 1,
          margin: 20,
          backgroundColor: "#EAF0EB",
          //   justifyContent: "center",
        }}
      >
        <View style={{ paddingBottom: 50 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Add an item</Text>
          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="Item name"
            theme={{ colors: { primary: Colors.tone1 } }}
          />
          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="Description"
            theme={{ colors: { primary: Colors.tone1 } }}
          />

          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="Category"
            theme={{ colors: { primary: Colors.tone1 } }}
            secureTextEntry={true}
          />
          <TextInput
            style={{ paddingTop: 5 }}
            mode="outlined"
            label="Affiliate/Referral link"
            theme={{ colors: { primary: Colors.tone1 } }}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderColor: colors.tone2,
            borderStyle: "dotted",
            borderRadius: 5,
            borderWidth: 3,
          }}
          onPress={() => chooseFile("photo")}
        >
          <Text style={{ color: colors.tone2, fontSize: 70 }}>+</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          {/* <Image
            source={{
              uri: "data:image/jpeg;base64," + filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          /> */}
          {filePath.length > 0 ? (
            <Image
              source={{
                uri: "data:image/jpeg;base64," + filePath.assets[0].uri,
              }}
              style={{ width: 100, height: 100 }}
            />
          ) : null}
          {filePath.length > 0 ? (
            <Image
              source={{ uri: filePath.assets[0].uri }}
              style={{ width: 100, height: 100 }}
            />
          ) : null}
        </View>
        {/* <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.profileimage}
            source={require("../../Assets/Icons/videooff.png")}
          />
          <Image
            style={styles.profileimage}
            source={require("../../Assets/Icons/video_mic.png")}
          />
          <Image
            style={styles.profileimage}
            source={require("../../Assets/Icons/videochat.png")}
          />
        </View> */}
      </ScrollView>
      <View style={{ flexDirection: "row", position: "absolute", bottom: 0 }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.tone1,
            flex: 1,
            margin: 20,
            justifyContent: "center",
            height: 50,
          }}
          onPress={() => {}}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
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
    flex: 1,
    resizeMode: "contain",
    width: 40,
    height: 40,
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
export default CreatStoreForm;
