import { createStackNavigator } from 'react-navigation-stack';
import RestaurantsScreen from '../screens/Restaurants';

const RestaurantsStacks = createStackNavigator({
    Restaurants:{
        screen: RestaurantsScreen,
        navigationOptions: ()=>({
            title: "Restaurantes"
        })
    }
});

export default RestaurantsStacks;