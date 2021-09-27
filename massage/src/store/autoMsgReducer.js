import { SHOW_AUTO_MSG, HIDE_AUTO_MSG } from "./types/autoMsgTypes";

const initialState = {
   // autoMassage: {}
}

const autoMassage = (state = initialState, { type, payload }) => {
   switch (type) {
      case SHOW_AUTO_MSG:
         return {
            showMsg: true,
            massage: payload
         }
      case HIDE_AUTO_MSG:
         return {
            ...state,
            showMsg: payload
         }
      default:
         return state;
   }
}

export default autoMassage