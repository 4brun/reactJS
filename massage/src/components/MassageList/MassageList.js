import { Grid } from "@material-ui/core";
import MassageItem from "../MassageItem/MassageItem";
import { useSelector } from "react-redux";
import AddForm from "../AddForm/AddForm";
import AutoMSG from "../AutoMSG/AutoMSG";

const MassageList = () => {
   const chatId = useSelector((state) => state.chats.activeId)
   const massageList = useSelector((state) => state.massages[chatId])


   return (
      <Grid container
         direction="column"
         alignItems="center"
         spacing={6}
         md={6}
      >
         <AddForm />
         <AutoMSG />
         <MassageItem massageList={massageList} />
      </Grid>
   )
}
export default MassageList