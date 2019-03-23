import React, { Component } from 'react'
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native'

import styles from './Styles'
import assets from './Assets'
import Form from './Form'

export default class SignScreen extends Component {
   
    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
            >
                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        JUST 
                    </Text>
                    <Text style={styles.text}>
                        IMPROVING
                    </Text>
                    <Text style={styles.text}>
                          MY SKILLS
                    </Text>
                    <Text style={styles.textSmall}>
                         Improve yourself  
                    </Text>
                </View>
                <View style={styles.container}>
                <Form/>
                <TouchableOpacity
                        onPress={() => alert('heeyy')}
                    >
                        <Text style={{ textAlign: "right", color: 'white', }} >
                            Forgot your password?
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.button}>
                            Log In
                       </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

    login = () => {
        this.props.navigation.navigate('Products')
    }

}

