import { OPEN_LOADING, CLOSE_LOADING } from "../store/types/loadingTypes";

export const openLoading = () => ({
   type: OPEN_LOADING,
   payload: true
})

export const closeLoading = () => ({
   type: CLOSE_LOADING,
   payload: false
})