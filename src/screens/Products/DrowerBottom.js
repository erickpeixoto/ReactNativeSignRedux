
import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import {Drawer, Header,Left,Button,Icon,Right,Body,Title} from 'native-base';
import Sidebar from '../Drawer';

export default class Main extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
              <Drawer
                     ref={(ref) => { this.drawer = ref; }}
                    content={<Sidebar/>}
                    side="right"
                    panOpenMask={0.01}
                  >

                    <Header>
                    <Left>
                    <Button transparent
                        onPress={()=>this.openDrawer()}
                    >
                    <Icon name='menu' />
                    </Button>
                    </Left>
                    <Body>
                    <Title>SDCC Wallet</Title>
                    </Body>
                    <Right>
                    <Button transparent>
                        <Icon name='bulb' />
                    </Button>
                    </Right>
                </Header>
                </Drawer>
    );
  }
}



