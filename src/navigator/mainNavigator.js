import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile15218537Navigator from '../features/UserProfile15218537/navigator';
import Settings16218536Navigator from '../features/Settings16218536/navigator';
import UserProfile19218535Navigator from '../features/UserProfile19218535/navigator';
import Dashboard122218530Navigator from '../features/Dashboard122218530/navigator';
import Settings23218529Navigator from '../features/Settings23218529/navigator';
import Dashboard229218523Navigator from '../features/Dashboard229218523/navigator';
import Camera30218522Navigator from '../features/Camera30218522/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile15218537: { screen: UserProfile15218537Navigator },
Settings16218536: { screen: Settings16218536Navigator },
UserProfile19218535: { screen: UserProfile19218535Navigator },
Dashboard122218530: { screen: Dashboard122218530Navigator },
Settings23218529: { screen: Settings23218529Navigator },
Dashboard229218523: { screen: Dashboard229218523Navigator },
Camera30218522: { screen: Camera30218522Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
