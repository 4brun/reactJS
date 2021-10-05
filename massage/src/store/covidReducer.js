import { SHOW_LIST, DELETE_COUNTRY } from "./types/covidTypes"

const initionalState = []

const covid = (state = initionalState, { type, payload }) => {
   switch (type) {
      case SHOW_LIST:
         return [...state, { id: state.length, ...payload }]
      case DELETE_COUNTRY:
         return [...state.filter((el) => el.id !== payload)]
      default:
         return state
   }
}

export default covid
