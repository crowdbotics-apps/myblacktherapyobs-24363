import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import colors from "../../Constants/colors";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.gold} barStyle="red" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.imagealignL}
          source={require("../../Assets/Logo.png")}
        />
      </View>
      <View style={styles.containerbox2}>
        <View style={styles.textwrapper}>
          <Text style={styles.textFormat2}>Welcome to my black therapy</Text>

          <View style={styles.bulletWrap}>
            <Text>{"\u2022"}</Text>
            <Text style={styles.wrapperText}>
              A safe and authentic place to heal
            </Text>
          </View>
          <View style={styles.bulletWrap}>
            <Text>{"\u2022"}</Text>
            <Text style={styles.wrapperText}>Community</Text>
          </View>
          <View style={styles.bulletWrap}>
            <Text>{"\u2022"}</Text>
            <Text style={styles.wrapperText}>Representation</Text>
          </View>
          <View style={styles.bulletWrap}>
            <Text>{"\u2022"}</Text>
            <Text style={styles.wrapperText}>Creativity</Text>
          </View>
          <View style={styles.bulletWrap}>
            <Text>{"\u2022"}</Text>
            <Text style={styles.wrapperText}>Access to care</Text>
          </View>
        </View>
        <View style={{ paddingTop: 30, paddingBottom: 20 }}>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Continue as a
          </Text>
        </View>
        <View style={styles.buttonsWrap}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Authenticationn");
            }}
            style={styles.buttonmainwrap}
          >
            <View style={styles.imagemainwrapper}>
              <Image
                style={styles.imageWrapper}
                source={require("../../Assets/member.png")}
              />
            </View>
            <Text style={styles.textFormat3}>Member</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Authentications");
            }}
            style={styles.buttonmainwrap}
          >
            <View style={styles.imagemainwrapper}>
              <Image
                style={styles.imageWrapper}
                source={require("../../Assets/therapist.png")}
              />
            </View>
            <Text style={styles.textFormat3}>Therapist</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  logoContainer: {
    //flex: 1,
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagealignL: {
    margin: 10,
    resizeMode: "contain",
    width: "70%",
    height: "70%",
  },
  containerbox2: {
    height: "60%",
    padding: 20,
  },
  textFormat1: {
    color: colors.grey,
  },
  textFormat2: {
    fontFamily: "Roboto-Black",
    color: colors.black,
    fontSize: 18,
    // textAlign: "center",
    //fontWeight: "bold",
  },
  imagemainwrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gold,
    width: 60,
    height: 60,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  imageWrapper: {
    width: "100%",
    height: "100%",

    resizeMode: "contain",
  },
  buttonmainwrap: {
    // flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textFormat3: {
    paddingTop: 5,
    //paddingLeft: 10,
    fontFamily: "Roboto-Black",
  },
  buttonsWrap: {
    flexDirection: "row",
  },
  textwrapper: {
    marginLeft: 30,
  },
  bulletWrap: {
    flexDirection: "row",
  },
  wrapperText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});

export default Welcome;
