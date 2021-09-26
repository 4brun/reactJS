import { HIDE_AUTO_MSG, SHOW_AUTO_MSG } from "../store/types/autoMsgTypes"

export const showAutoMSG = (massage) => ({
   type: SHOW_AUTO_MSG,
   payload: massage
})

export const hideAutoMSG = (hide) => ({
   type: HIDE_AUTO_MSG,
   payload: hide
})