import { SHOW_LIST, DELETE_COUNTRY } from "../store/types/covidTypes";
import { newError } from "./errorActions";

const getList = (country, confirmed) => ({
   type: SHOW_LIST,
   payload: { country, confirmed }
})

export const delCountry = (id) => ({
   type: DELETE_COUNTRY,
   payload: id
})

export const showList = () => dispatch => {
   fetch('https://covid-api.mmediagroup.fr/v1/cases?continent=Europe')
      .then((response) => response.json())
      .then((data) => {
         for (let key in data) {
            const confirmed = data[key].All.confirmed
            const country = key
            dispatch(getList(country, confirmed))
         }
      })
      .catch((error) => dispatch(newError(error)))
}