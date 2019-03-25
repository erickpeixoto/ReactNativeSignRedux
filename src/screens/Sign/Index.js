import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signIn } from '../../store/Sign/actions'
import { handleNavigation } from '../../store/App/actions'

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

 class SignScreen extends Component {

    componentDidMount(){
        const { handleNavigation, navigation } = this.props
        handleNavigation(navigation)
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
                <Form onSubmit={(values) => this.props.signIn(values) } />
                <TouchableOpacity
                        onPress={() => alert('heeyy')}
                    >
                        <Text style={{ textAlign: "right", color: 'white', }} >
                            Forgot your password?
                    </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => ({ })  
const mapDispatchToProps = dispatch => bindActionCreators({ signIn, handleNavigation }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SignScreen)

