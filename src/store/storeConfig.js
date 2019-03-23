import { createStore, combineReducers } from 'redux'
import signReducer from './Sign/reducers'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    form: formReducer, 
    sign: signReducer
})
const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig