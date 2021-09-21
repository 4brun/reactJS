import { ADD_PROFILE, DELETE_PROFILE } from "./types/profileTypes";

const initialState = {
   profile: {}
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
      default:
         return state;
   }
}
export default profileReducer
