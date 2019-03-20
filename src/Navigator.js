import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation'

import SignScreen from './screens/Sign' 
import Products from './screens/Products'

  const MainRoutes = {
      Sign:  SignScreen,
      Products: Products
}

  const MainNavigator = createStackNavigator(MainRoutes,{
    initialRouteName: "Sign"
  })
  const AppNavigation = createAppContainer(MainNavigator)

  export default AppNavigation