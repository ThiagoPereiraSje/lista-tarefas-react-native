import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Agenda from './screens/Agenda';
import Auth from './screens/Auth';

const mainNavigation = createSwitchNavigator({
  Auth,
  Agenda,
})

export default createAppContainer(mainNavigation);