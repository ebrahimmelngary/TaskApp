
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Splash from "../containers/Splash";
import Home from "../containers/Home";

const SwitchNavigator = createSwitchNavigator({
  Splash,
  Home

}
);

const AppNavigation = createAppContainer(SwitchNavigator)
export default AppNavigation;