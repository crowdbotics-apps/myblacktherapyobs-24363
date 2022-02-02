import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

// import { ContactStackNavigator } from "./StackNavigator";
import Tabs from "./Tabs";
import Home from "./Home";
const Drawer = createDrawerNavigator();
import CustomSidebarMenu from "./CustomSideDrawer";
import CreateGroupForm from "./CreateGroupForm";
import GroupFeed from "./GroupFeed";
import Profile from "./Profile";
import Store from "./Store";
import StoreDetails from "./StoreDetails";
import Cart from "./Cart";
const index = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CreateGroupForm" component={CreateGroupForm} />
      <Drawer.Screen name="GroupFeed" component={GroupFeed} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Store" component={Store} />
      <Drawer.Screen name="StoreDetail" component={StoreDetails} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
};

export default index;
