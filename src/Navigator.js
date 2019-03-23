import React from 'react'
import { Text } from 'react-native'
import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
  } from 'react-navigation'

import SignScreen from './screens/Sign' 
import Products from './screens/Products'
import DrawerSceen from './screens/Drawer' 



// const MyDrawerNavigator = createDrawerNavigator({
//     Home: {
//       screen: Products, navigationOptions: {
//         drawer: () => ({
//           label: 'Simple Tabs',
//           icon: ({ tintColor }) => (
//             <Text>
//               Test
//             </Text>
//           ),
//         }),
//       },
//     },
//     Outra: {
//       screen: DrawerSceen
//     }

  
// })

const MainRoutes = {
  Sign:  SignScreen,
  Home: Products
}

  const MainNavigator = createStackNavigator(MainRoutes,{
    initialRouteName: 'Sign',
    headerMode: 'none'
  })

  
  const AppNavigation = createAppContainer(MainNavigator)

  export default AppNavigation