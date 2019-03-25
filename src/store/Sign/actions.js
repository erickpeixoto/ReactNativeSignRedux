import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'


export const signIn = (values) => {
   
    return (dispatch, getState) => {
        console.warn('asdasdas', getState())
        const { app: { navigation } } = getState()
        navigation.navigate('Home')
    }
        
}   

export const logout = () => {
    return {
        type: USER_LOGGED_OUT,
        payload: false
    }
}