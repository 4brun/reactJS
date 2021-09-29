import AddBoxIcon from '@material-ui/icons/AddBox';
import { TextField, Button, Grid } from "@material-ui/core";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMassage } from '../../actions/massageActions';
import { showMSG } from '../../actions/autoMsgActions';

const AddMasssageForm = () => {
   const [userText, setUserText] = useState('')
   const [userAuthor, setUserAuthor] = useState('')
   const chatId = useSelector((state) => state.chats.activeId)

   const dispatch = useDispatch()

   const addMsg = () => {
      const userMassage = {
         text: userText,
         author: userAuthor || 'Аноним'
      }
      if (!userText) {
         dispatch(showMSG(`Вы не ввели сообщение`))
      } else if (!userAuthor) {
         dispatch(showMSG(`Вы добавили сообщение ${userText} без автора`)) // отправляю сообщение в асинхронный setTimeout
         dispatch(addMassage(chatId, userMassage))
      } else {
         dispatch(showMSG(`Вы добавили сообщение ${userText} от автора ${userAuthor}`)) // отправляю сообщение в асинхронный setTimeout
         dispatch(addMassage(chatId, userMassage))
      }
      setUserText('')
      setUserAuthor('')
   }
   return (
      <>
         <Grid item>
            <TextField
               id="outlined-basic"
               label="text"
               variant="outlined"
               size="small"
               autoFocus
               value={userText}
               onChange={event => setUserText(event.target.value)} />
         </Grid>
         <Grid item>
            <TextField
               id="outlined-basic"
               label="author"
               variant="outlined"
               size="small"
               value={userAuthor}
               onChange={event => setUserAuthor(event.target.value)} />
         </Grid>
         <Grid item>
            <Button
               variant="contained"
               color="primary"
               onClick={addMsg}
               startIcon={<AddBoxIcon />}>
               Добавить сообщение</Button>
         </Grid>
      </>
   )
}
export default AddMasssageForm