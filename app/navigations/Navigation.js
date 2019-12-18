import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Icon } from "react-native-elements";

import RestaurantsStacks from "./RestaurantsStacks";
import TopRestaurantsStacks from "./TopRestaurantsStacks";
import AccountStacks from "./AccountStacks";
import SearchStacks from "./SearchStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsStacks,
      navigationOptions: () => ({
        tabBarLabel: "Restaurantes",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            tintColor={tintColor}
          />
        )
      })
    },
    TopRestaurants: {
      screen: TopRestaurantsStacks,
      navigationOptions: () => ({
        tabBarLabel: "Top",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            tintColor={tintColor}
          />
        )
      })
    },
    Account: {
      screen: AccountStacks,
      navigationOptions: () => ({
        tabBarLabel: "Top",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            tintColor={tintColor}
          />
        )
      })
    },
    Search: {
      screen: SearchStacks,
      navigationOptions: () => ({
        tabBarLabel: "Top",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            tintColor={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Account",
    order: ["Search", "Account", "Restaurants", "TopRestaurants"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeBackgroundColor: "#00a680"
    }
  }
);

export default createAppContainer(NavigationStacks);
