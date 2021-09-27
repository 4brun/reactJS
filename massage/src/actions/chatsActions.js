import { OPEN_CHAT, DELETE_CHAT, ADD_CHAT } from "../store/types/chatsTypes";

export const addChat = (name) => ({
   type: ADD_CHAT,
   payload: name
})

export const openChat = (id) => ({
   type: OPEN_CHAT,
   payload: id
})

export const deleteChat = (id) => ({
   type: DELETE_CHAT,
   payload: id
})