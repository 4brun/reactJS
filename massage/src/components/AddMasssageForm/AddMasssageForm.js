import AddBoxIcon from '@material-ui/icons/AddBox';
import { TextField, Button, Grid } from "@material-ui/core";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMassage } from '../../actions/massageActions';
import { showAutoMSG } from '../../actions/autoMsgActions';

const AddMasssageForm = () => {
   const [userText, setUserText] = useState('')
   const [userAuthor, setUserAuthor] = useState('')
   const chatId = useSelector((state) => state.chats.activeId)

   const dispatch = useDispatch()

   const addMsg = () => {
      const userMassage = {
         text: userText || 'Текст',
         author: userAuthor || 'Автор'
      }
      dispatch(addMassage(chatId, userMassage))
      dispatch(showAutoMSG(`Вы добавили сообщение ${userText} от автора ${userAuthor}`))
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