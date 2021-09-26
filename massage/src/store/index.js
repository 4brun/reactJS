import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import autoMassage from './autoMsgReducer'
import chats from './chatsReducer'
import massages from './massagesReducer'
import profile from './profileReducer'

const reducers = combineReducers({
   profile,
   massages,
   autoMassage,
   chats
})

export const store = createStore(reducers, composeWithDevTools())

// profile: profileReducer,
// massages: massagesReducer,
// autoMassage: autoMsgReducer