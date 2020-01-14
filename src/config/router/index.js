import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail, Orders, OrderDetail } from '../../containers/pages';

const HomeStack = createStackNavigator(
    {
        Home,
        NewsDetail,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
);

// createStackNavigator bisa menggunakan tombol back
const OrdersStack = createStackNavigator(
    {
        Orders,
        OrderDetail,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Orders'
    }
);

// createSwitchNavigator tidak bisa menggunakan tombol back
const Router = createSwitchNavigator(
    {
        // Home: {
        //     screen: Home,
        // },
        // NewsDetail: {
        //     screen: NewsDetail,
        // },
        HomeStack,
        OrdersStack
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
    );
  
export default createAppContainer(Router);