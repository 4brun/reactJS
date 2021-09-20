import { Grid, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MailIcon from '@material-ui/icons/Mail';
import MassageList from '../MassageList/MassageList'

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
         <Grid container>
            <Grid item md={6} sm={6}>
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
            </Grid>

            <MassageList />
         </Grid>

      </>
   )
}

export default ChatList