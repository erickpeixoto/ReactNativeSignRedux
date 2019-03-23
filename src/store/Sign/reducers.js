import {
    USER_LOGGED_IN, 
    USER_LOGGED_OUT
} from './actionTypes'

const initialState = {
        auth: {
            user: {}
        }

}

export default (state = initialState, action) => {
  switch (action.type) {

  case USER_LOGGED_IN:
    return { ...state,
                auth: {
                    user: action.payload
                }
    }
    default:
        return state
    }
}
