import { Grid } from "@material-ui/core"
import MassageList from '../MassageList/MassageList'
import AddChatForm from "../AddChatForm/AddChatForm";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = () => {

   return (
      <>
         <Grid container justifyContent="space-between">
            <Grid item md={5} sm={5}>
               <AddChatForm />
               <ChatItem />
            </Grid>
            <Grid item md={6} sm={6}>
               <MassageList />
            </Grid>
         </Grid>

      </>
   )
}

export default ChatList