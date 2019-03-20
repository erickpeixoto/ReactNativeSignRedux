import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        color: 'red'
    },
    containerText: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: 'red',
        paddingTop: 100,
        paddingLeft: 40,
    },
    input: {
        width: 250,
        height: 45,
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FF473A',
        color: 'white',
        paddingBottom: 20,
        padding: 10

    },
    text: {
        alignItems: 'center',
        color: 'white',
        fontSize: 36,
    },
    textSmall: {
        alignItems: 'flex-end',
        color: 'white',
        fontSize: 12,
    }
})