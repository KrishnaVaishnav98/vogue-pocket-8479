import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { reducer as authReducer } from './Authentication/reducer'
import { reducer as bankApplicationReducer } from './BankApplication/reducer'


const rootReducer = combineReducers({
    authReducer,
    bankApplicationReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
