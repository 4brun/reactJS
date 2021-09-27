import { Grid } from "@material-ui/core";
import MassageItem from "../MassageItem/MassageItem";
import { useSelector } from "react-redux";
import AddMasssageForm from "../AddMasssageForm/AddMasssageForm";
import AutoMSG from "../AutoMSG/AutoMSG";

const MassageList = () => {
   const chatId = useSelector((state) => state.chats.activeId)
   const massageList = useSelector((state) => state.massages[chatId]) // отображаем только активный чат

   return (
      <Grid container
         direction="column"
         alignItems="center"
         spacing={6}
      >
         <AddMasssageForm />
         <AutoMSG />
         <MassageItem massageList={massageList} />
      </Grid>
   )
}

export default MassageList