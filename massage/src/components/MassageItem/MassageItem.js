import { Grid, Card, CardContent, Typography, CardHeader, IconButton, Avatar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { showAutoMSG } from '../../actions/autoMsgActions';
import { deleteMassage } from '../../actions/massageActions';

const MassageItem = ({ massageList }) => {
   const dispatch = useDispatch()
   const chatId = useSelector((state) => state.chats.activeId)
   const deleteItem = (id, author) => {
      dispatch(deleteMassage(chatId, id))
      dispatch(showAutoMSG(`Вы удалили сообщение от автора ${author}`))
   }

   return (
      <Grid direction="column" container spacing={4} >
         {massageList.map((item) => (
            <Grid item key={item.id}>
               <Card>
                  <CardHeader
                     avatar={<Avatar></Avatar>}
                     title={item.author}
                     action={<IconButton
                        color="secondary"
                        onClick={() => deleteItem(item.id, item.author)}>
                        <CloseIcon />
                     </IconButton>} />

                  <CardContent>
                     <Typography>{item.text}</Typography>
                  </CardContent>
               </Card>
            </Grid>
         ))}
      </Grid>
   )
}

export default MassageItem