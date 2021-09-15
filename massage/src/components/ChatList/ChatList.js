import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MailIcon from '@material-ui/icons/Mail';

const chats = [{
   id: 1,
   name: "Кольца"
},
{
   id: 2,
   name: "Зомби"
},
{
   id: 3,
   name: "Рыцари всякие"
},
{
   id: 4,
   name: "Инопланетяне и всё такое"
},
{
   id: 5,
   name: "Волшебыне палочки"
},]

const ChatList = () => {
   return (
      <>
         <List>
            {chats.map((chat) => (
               <ListItem
                  button
                  key={chat.id}>
                  <ListItemIcon>
                     <MailIcon />
                  </ListItemIcon>
                  <ListItemText >
                     {chat.name}
                  </ListItemText>
               </ListItem>))}
         </List>
      </>
   )
}

export default ChatList