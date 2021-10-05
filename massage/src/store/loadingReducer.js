import { OPEN_LOADING, CLOSE_LOADING } from "./types/loadingTypes";

const initionalState = false

const loading = (state = initionalState, { type, payload }) => {
   switch (type) {
      case OPEN_LOADING:
         return payload
      case CLOSE_LOADING:
         return payload
      default:
         return state
   }
}

export default loading