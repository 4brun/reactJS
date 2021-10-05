import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import autoMassage from './autoMsgReducer'
import covid from './covidReducer'
import chats from './chatsReducer'
import massages from './massagesReducer'
import profile from './profileReducer'
import error from './errorReducer'
import loading from './loadingReducer'

const rootReducer = combineReducers({
   profile,
   massages,
   autoMassage,
   chats,
   covid,
   error,
   loading
})

export const store = createStore(rootReducer,
   composeWithDevTools(applyMiddleware(thunk)))