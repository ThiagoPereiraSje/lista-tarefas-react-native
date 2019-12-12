// import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Agenda from './screens/Agenda';
import Auth from './screens/Auth';

// const MainRoutes = {
//     Auth: {
//         name: 'Auth',
//         screen: Auth,
//     },
//     Home: {
//         name: 'Home',
//         screen: Agenda,
//     },
// }

// const MainNavigator = createSwitchNavigator(MainRoutes, { initialRouteName: 'Auth' })

// export default MainNavigator;

const Navigator = createAppContainer(
    createStackNavigator({
      Home: Agenda,
      Auth,
    })
)

export default Navigator;
