import { createStore, combineReducers, applyMiddleware } from 'redux'
import signReducer from './Sign/reducers'
import { composeWithDevTools } from 'remote-redux-devtools'

// MIDDLEWARES
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

// REDUCERS
import { reducer as formReducer } from 'redux-form'
import app from './App/reducers'

const middleware = [thunk, promise, multi]
const compose = composeWithDevTools({ realtime: true })


const reducers = combineReducers({
    app,
    form: formReducer, 
    sign: signReducer
})
const store = createStore(reducers, compose(
    applyMiddleware(...middleware),
  ))
const storeConfig = () => {
    return store
    
}

export default storeConfig