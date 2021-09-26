import { OPEN_CHAT, DELETE_CHAT } from "./types/chatsTypes"

const initialState = {
   activeId: 0,
   chats: [{ id: 0, name: "Кольца" },
   { id: 1, name: "Зомби" },
   { id: 2, name: "Рыцари всякие" },
   { id: 3, name: "Инопланетяне и всё такое" },
   { id: 4, name: "Волшебыне палочки" },]
}

const chats = (state = initialState, { type, payload }) => {
   switch (type) {
      case OPEN_CHAT:
         return {
            ...state,
            activeId: payload,

         }
      case DELETE_CHAT:
         return {
            ...state,
            chats: state.chats.filter((el) => el.id !== payload)
         }
      default:
         return state
   }
}

export default chats