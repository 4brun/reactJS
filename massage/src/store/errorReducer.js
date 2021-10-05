import { NEW_ERROR } from "./types/errorTypes";

const initionalState = null

const error = (state = initionalState, { type, payload }) => {
   switch (type) {
      case NEW_ERROR:
         return payload
      default:
         return state
   }
}

export default error
