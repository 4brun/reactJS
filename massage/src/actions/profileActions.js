import { ADD_PROFILE, DELETE_PROFILE } from "../store/types/profileTypes";

export const addProfile = (profile) => ({
   type: ADD_PROFILE,
   payload: profile
})

export const deleteProfile = () => ({
   type: DELETE_PROFILE
})