import { ADD_MASSAGE, CREATE_MASSAGELIST, DELETE_MASSAGE } from "../store/types/massageTypes";

export const addMassage = (massage) => ({
   type: ADD_MASSAGE,
   payload: massage
})

export const craeteMassageList = (massageList) => ({
   type: CREATE_MASSAGELIST,
   payload: massageList
})

export const deleteMassage = (id) => ({
   type: DELETE_MASSAGE,
   payload: id
})