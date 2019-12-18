import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

const SearchStacks = createStackNavigator({
  MyAccount: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "search"
    })
  }
});

export default SearchStacks;
