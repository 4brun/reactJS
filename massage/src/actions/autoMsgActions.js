import { HIDE_AUTO_MSG } from "../store/types/autoMsgTypes"

export const hideAutoMSG = (hide) => ({
   type: HIDE_AUTO_MSG,
   payload: hide
})