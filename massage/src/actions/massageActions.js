import { ADD_MASSAGE, DELETE_MASSAGE, DELETE_MASSAGELIST, CREATE_MASSAGELIST } from "../store/types/massageTypes";

export const addMassage = (chatId, massage) => ({
   type: ADD_MASSAGE,
   payload: { chatId: chatId, massage: massage }
})

export const deleteMassage = (chatId, id) => ({
   type: DELETE_MASSAGE,
   payload: { chatId: chatId, id: id }
})

export const deleteMassageList = (id) => ({
   type: DELETE_MASSAGELIST,
   payload: id
})

export const createMassageList = (id) => ({
   type: CREATE_MASSAGELIST,
   payload: id
})