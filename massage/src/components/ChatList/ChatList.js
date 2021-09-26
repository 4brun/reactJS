import { Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core"
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch, useSelector } from "react-redux";
import { deleteChat, openChat } from "../../actions/chatsActions";
import MassageList from '../MassageList/MassageList'
import { deleteMassageList } from "../../actions/massageActions";
import { showAutoMSG } from "../../actions/autoMsgActions";


const ChatList = () => {
   const chats = useSelector(state => state.chats.chats)
   const dispatch = useDispatch()
   const handlerChat = (id) => dispatch(openChat(id))
   const delChat = (id, name) => {
      dispatch(deleteChat(id)) // удаляем название чата
      dispatch(deleteMassageList(id)) // удаляем ненужные сообщения
      dispatch(showAutoMSG(`Вы удалили чат - ${name}`)) // выводим сообщение
   }

   return (
      <>
         <Grid container>
            <Grid item md={6} sm={6}>
               <List>
                  {chats.map((chat) => (
                     <ListItem
                        button
                        key={chat.id}
                        onClick={() => handlerChat(chat.id)}>
                        <ListItemIcon>
                           <MailIcon />
                        </ListItemIcon>
                        <ListItemText >
                           {chat.name}
                        </ListItemText>
                        <ListItemSecondaryAction>
                           <IconButton color="secondary" onClick={() => delChat(chat.id, chat.name)}>
                              <DeleteIcon />
                           </IconButton>
                        </ListItemSecondaryAction>
                     </ListItem>))}
               </List>
            </Grid>

            <MassageList />
         </Grid>

      </>
   )
}

export default ChatList