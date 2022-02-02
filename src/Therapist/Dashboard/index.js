import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

// import { ContactStackNavigator } from "./StackNavigator";
import Tabs from "./Tabs";
import Home from "./Home";
import CreateGroupForm from "./CreateGroupForm";
import GroupFeed from "./GroupFeed";
import ConferenceForm from "./ConferenceForm";
import Store from "./Store";
import CreateStoreForm from "./CreateStoreForm";
import Profile from "./Profile";
import StartConference from "./StartConference";

const Drawer = createDrawerNavigator();
import CustomSidebarMenu from "./CustomSideDrawer";
const index = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CreateGroupForm" component={CreateGroupForm} />
      <Drawer.Screen name="ConferenceForm" component={ConferenceForm} />
      <Drawer.Screen name="Store" component={Store} />
      <Drawer.Screen name="CreateStoreForm" component={CreateStoreForm} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="StartConference" component={StartConference} />
      <Drawer.Screen name="GroupFeed" component={GroupFeed} />
    </Drawer.Navigator>
  );
};

export default index;
