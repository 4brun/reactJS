import { deleteMassageList } from "../../actions/massageActions";
import { showAutoMSG } from "../../actions/autoMsgActions";
import { useDispatch, useSelector } from "react-redux";
import { deleteChat, openChat } from "../../actions/chatsActions";
import { IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core"
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete'

const ChatItem = () => {
   const chats = useSelector(state => state.chats.chats)
   const chatId = useSelector(state => state.chats.activeId)
   const dispatch = useDispatch()
   const handlerChat = (id) => dispatch(openChat(id))
   const delChat = (id, name) => {
      dispatch(deleteChat(id)) // удаляем название чата
      dispatch(deleteMassageList(id)) // удаляем ненужные сообщения
      dispatch(showAutoMSG(`Вы удалили чат - ${name}`)) // выводим сообщение
   }

   return (
      <List>
         {chats.map((chat) => (
            <ListItem
               button
               selected={chatId === chat.id} // выделяется выбранный чат
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
   )
}

export default ChatItem