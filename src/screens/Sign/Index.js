import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'

import styles from './Styles'

export default class SignScreen extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <View>
                <Text style={styles.container}>
                    Login Screen
                </Text>
            </View>
        )
    }

    login = () => {
    }

}

