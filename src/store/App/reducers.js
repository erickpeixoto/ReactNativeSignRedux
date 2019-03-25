import {
    HANDLE_NAVIGATION,
} from './actionTypes'

const initialState = {
        api: '#host',
        services: {},
        navigation: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

  case HANDLE_NAVIGATION:
    return { ...state,
        navigation: action.payload
    }
    default:
        return state
    }
}
