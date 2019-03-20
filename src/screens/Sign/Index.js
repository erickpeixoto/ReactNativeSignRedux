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

export default class SignScreen extends Component {
    state = {
        email: '',
        password: ''
    }

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
                    <TextInput
                        placeholder={'Email'}
                        style={styles.input}
                        placeholderTextColor={'#000000'}
                        autoFocus={true}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        placeholder={'Password'}
                        style={styles.input}
                        placeholderTextColor={'#000000'}
                        autoFocus={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
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
                        onPress={() => this.login()}
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

