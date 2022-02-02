import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import YouTube from "react-native-youtube";
import VideoPlayer from "react-native-video-player";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
const VIMEO_ID = "179859217";
import colors from "../../Constants/colors";
let DATA = [
  {
    name: "Trauma",
    url: require("../../Assets/Trauma.png"),
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
    videourl: "R_3CUyW1pDw",
  },
  {
    name: "Depression",
    url: require("../../Assets/Depression.png"),
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
    videourl: "R_3CUyW1pDw",
  },
  {
    name: "Relationship",
    url: require("../../Assets/Relationship.png"),
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
    videourl: "R_3CUyW1pDw",
  },
  {
    name: "Anxiety",
    url: require("../../Assets/Anxiety.png"),
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
    videourl: "R_3CUyW1pDw",
  },
  {
    name: "Paranting",
    url: require("../../Assets/Anxiety.png"),
    Description: [
      "This is my description of therapy, i am a profesiional and looking for therapy job",
    ],
    videourl: "R_3CUyW1pDw",
  },
];
import { Searchbar } from "react-native-paper";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }
  renderItem = ({ item }) => (
    <View
      style={{
        marginRight: 20,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <YouTube
        videoId="KVZ-P-ZI6W4" // The YouTube video ID
        play={false} // control playback of video with true/false
        fullscreen={false} // control whether the video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        style={{ alignSelf: "stretch", height: 200, width: 300 }}
        apiKey="XXXXXXX"
      />
    </View>
  );
  renderItem2 = ({ item }) => (
    <View
      style={{
        marginRight: 20,
        borderRadius: 10,
        padding: 10,
        width: 100,
        height: 100,
        alignItems: "center",

        backgroundColor: colors.gold,
      }}
    >
      <Image style={styles.profileimage} source={item.url} />
      <Text style={{ textAlign: "center", color: colors.white }}>
        {item.name}
      </Text>
    </View>
  );
  componentDidMount() {
    global
      .fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          thumbnailUrl: res.video.thumbs["640"],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        })
      );
  }
  onsearch() {}
  searchQuery() {}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DashboardHeader navigate={this.props.navigation} title={"Media"} />
        <ScrollView style={{ padding: 10 }}>
          <Searchbar
            style={{ marginBottom: 10 }}
            placeholder="Search"
            onChangeText={this.onsearch()}
            value={this.searchQuery()}
          />

          <Text
            style={[styles.textFormat1, { marginTop: 20, marginBottom: -10 }]}
          >
            Featured
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20 }}
            data={DATA}
            horizontal
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />

          <Text
            style={[styles.textFormat1, { marginTop: 20, marginBottom: -10 }]}
          >
            Other Categories
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20 }}
            data={DATA}
            horizontal
            renderItem={this.renderItem2}
            keyExtractor={(item) => item.id}
          />
          <View
            style={{ flexDirection: "row", marginTop: 20, paddingBottom: 20 }}
          >
            <View
              style={{
                marginRight: 20,
                borderRadius: 10,
                padding: 10,
                width: 100,
                height: 100,
                alignItems: "center",
                padding: 10,
                backgroundColor: colors.gold,
              }}
            >
              <Image
                style={[styles.profileimage, { tintColor: "white" }]}
                source={require("../../Assets/Icons/videocamera.png")}
              />
              <Text style={{ textAlign: "center", color: colors.white }}>
                Videos
              </Text>
            </View>
            <View
              style={{
                marginRight: 20,
                borderRadius: 10,
                padding: 10,
                width: 100,
                height: 100,
                alignItems: "center",

                backgroundColor: colors.gold,
              }}
            >
              <Image
                style={[styles.profileimage, { tintColor: "white" }]}
                source={require("../../Assets/Icons/podcasts.png")}
              />
              <Text style={{ textAlign: "center", color: colors.white }}>
                Podcast
              </Text>
            </View>
          </View>
          {/* <Text
            style={[styles.textFormat1, { marginTop: 20, marginBottom: -10 }]}
          >
            Today Top videos
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20 }}
            data={DATA}
            horizontal
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          /> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backimage: {
    margin: 10,
    resizeMode: "contain",
    width: "50%",
    height: "50%",
  },
  profileimage: {
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
