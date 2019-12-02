import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Icon } from "react-native-elements";

import RestaurantsStacks from "./RestaurantsStacks";
import TopRestaurantsStacks from './TopRestaurantsStacks'

const NavigationStacks = createBottomTabNavigator({
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
  }
});

export default createAppContainer(NavigationStacks);
