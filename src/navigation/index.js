
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Splash from "../containers/Splash";
import Home from "../containers/Home";
import {createStackNavigator} from 'react-navigation-stack'
import UserData from "../containers/UserData";

const UserDataScreen= createStackNavigator({

 UserData
})
const HomeScreen= createStackNavigator({

  Home
 })
 const SplashScreen= createStackNavigator({

  Splash
 })
const SwitchNavigator = createSwitchNavigator({
  Splash,
  HomeScreen,
 UserDataScreen

},{
  initialRouteName:'Splash'
}
);

const AppNavigation = createAppContainer(SwitchNavigator)
export default AppNavigation;