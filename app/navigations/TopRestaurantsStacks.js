import { createStackNavigator } from 'react-navigation-stack';
import TopRestaurantsScreen from '../screens/TopRestaurants';
import RestaurantsScreen from '../screens/Restaurants';

const TopRestaurantsStacks = createStackNavigator({
    TopRestaurants:{
        screen: TopRestaurantsScreen,
        navigationOptions: ()=>({
            title: "Top X Restaurantes"
        })
    }
});

export default TopRestaurantsStacks;