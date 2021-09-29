import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import autoMassage from './autoMsgReducer'
import chats from './chatsReducer'
import massages from './massagesReducer'
import profile from './profileReducer'

const rootReducer = combineReducers({
   profile,
   massages,
   autoMassage,
   chats
})

export const store = createStore(rootReducer,
   composeWithDevTools(applyMiddleware(thunk)))