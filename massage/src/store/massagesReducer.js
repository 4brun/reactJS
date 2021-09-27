import { ADD_MASSAGE, CREATE_MASSAGELIST, DELETE_MASSAGE, DELETE_MASSAGELIST, } from "./types/massageTypes"

const initialState = {
   0: [{
      id: 0,
      text: 'Здесь сообщения из первого чата',
      author: 'Я'
   },
   {
      id: 1,
      text: 'Властелин колец',
      author: 'Джон Р. Р. Толкин'
   },
   {
      id: 2,
      text: 'Властелин колец',
      author: 'Джон Р. Р. Толкин'
   }],
   1: [{
      id: 0,
      text: 'Здесь сообщения из второго чата',
      author: 'Я'
   },
   {
      id: 1,
      text: 'Гордость и предубеждение',
      author: 'Джон Р. Р. Толкин'
   }],
   2: [{
      id: 0,
      text: 'Здесь сообщения из третьего чата',
      author: 'Я'
   },
   {
      id: 1,
      text: 'Тёмные начала',
      author: 'Филип Пулман'
   }],
   3: [{
      id: 0,
      text: 'Здесь сообщения из четвёртого чата',
      author: 'Я'
   },
   {
      id: 1,
      text: 'Автостопом по галактике',
      author: 'Дуглас Адамс'
   }],
   4: [{
      id: 0,
      text: 'Здесь сообщения из пятого чата',
      author: 'Я'
   },
   {
      id: 1,
      text: 'Гарри Поттер и Кубок огня',
      author: 'Джоан Роулинг'
   }]
}

const massages = (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_MASSAGE:
         return {
            ...state,
            [payload.chatId]:
               [
                  ...state[payload.chatId],
                  {
                     id: state[payload.chatId].length,
                     ...payload.massage
                  }
               ]
         }
      case DELETE_MASSAGE:
         return {
            ...state,
            [payload.chatId]: state[payload.chatId].filter((el) => el.id !== payload.id)
         }
      case DELETE_MASSAGELIST:
         return {
            ...state,
            [payload]: []
         }
      case CREATE_MASSAGELIST:
         return {
            ...state,
            [payload]: []
         }
      default:
         return state;
   }
}

export default massages