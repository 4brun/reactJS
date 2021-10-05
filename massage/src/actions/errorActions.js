import { NEW_ERROR } from "../store/types/errorTypes";

export const newError = (err) => ({
   type: NEW_ERROR,
   payload: err
})