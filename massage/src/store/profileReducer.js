import { ADD_PROFILE, DELETE_PROFILE } from "./types/profileTypes";
import { ADD_MASSAGE, CREATE_MASSAGELIST, DELETE_MASSAGE } from "./types/massageTypes"
import { HIDE_AUTO_MSG } from "./types/autoMsgTypes";

const initialState = {
   profile: {},
   massages: [],
   autoMassage: {}
}

const profileReducer = (state = initialState, { payload, type }) => {
   switch (type) {
      case ADD_PROFILE:
         return {
            ...state,
            profile: payload
         }
      case DELETE_PROFILE:
         return {
            ...state, profile: {}
         }
      case ADD_MASSAGE:
         return {
            ...state,
            massages: [
               ...state.massages,
               {
                  id: state.massages.length + 1,
                  ...payload
               }
            ],
            autoMassage: {
               showMsg: true,
               massage: `Вы добавили в список текст: ${payload.text} и Автора: ${payload.author}`
            }
         }
      case DELETE_MASSAGE:
         return {
            ...state,
            massages: state.massages.filter((el) => el.id !== payload)
         }
      case HIDE_AUTO_MSG:
         return {
            ...state,
            autoMassage: {
               showMsg: payload
            }
         }
      case CREATE_MASSAGELIST:
         return {
            ...state,
            massages: [
               ...state.massages,
               ...payload
            ]
         }
      default:
         return state;
   }
}

export default profileReducer
