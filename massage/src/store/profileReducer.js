import { ADD_PROFILE, DELETE_PROFILE } from "./types/profileTypes";

const initialState = {
   // profile: {},
}

const profile = (state = initialState, { payload, type }) => {
   switch (type) {
      case ADD_PROFILE:
         return {
            ...state,
            ...payload
         }
      case DELETE_PROFILE:
         return {
         }
      default:
         return state;
   }
}

export default profile
