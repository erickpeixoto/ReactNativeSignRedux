import { HANDLE_NAVIGATION } from './actionTypes'



export const handleNavigation = (navigation) => {
    return {
        type: HANDLE_NAVIGATION,
        payload: navigation
    }
}