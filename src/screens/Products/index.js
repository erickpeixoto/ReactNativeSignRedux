
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Drawer from 'react-native-drawer-menu';
import {Easing} from 'react-native'; // Customize easing function (Optional)

import Sidebar from '../Drawer';

export default class Main extends Component {
 
  render() {
       // prepare your drawer content
  var drawerContent = (<View style={styles.drawerContent}>
    <View />
    <View >
      <View><Text>Drawer Content</Text></View>
    </View>
  </View>);
  // customize drawer's style (Optional)
  var customStyles = {
    drawer: {
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 10
    },
    mask: {}, // style of mask if it is enabled
    main: {} // style of main board
  };
    return (
        <Drawer
                drawerWidth={300}
                drawerContent={<Sidebar/>}
                type={Drawer.types.Overlay}
                drawerPosition={Drawer.positions.Right}
                onDrawerOpen={() => {console.log('Drawer is opened');}}
                onDrawerClose={() => {console.log('Drawer is closed')}}
                easingFunc={Easing.ease}
            >
                <View>
                    <Text>Teste</Text>
                </View>
            </Drawer>
    );
  }
}

const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
        backgroundColor: 'red',
        padding: 20,
    }
})