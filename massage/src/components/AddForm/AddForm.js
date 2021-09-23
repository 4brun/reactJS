import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { TextField, Button, Grid } from "@material-ui/core";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMassage, craeteMassageList } from '../../actions/massageActions';

const AddForm = () => {
   const [userText, setUserText] = useState('')
   const [userAuthor, setUserAuthor] = useState('')

   const dispatch = useDispatch()

   const craeteList = () => {
      const list = [{
         id: 1,
         text: 'Властелин колец',
         author: 'Джон Р. Р. Толкин'
      },
      {
         id: 2,
         text: 'Гордость и предубеждение',
         author: 'Джон Р. Р. Толкин'
      },
      {
         id: 3,
         text: 'Тёмные начала',
         author: 'Филип Пулман'
      },
      {
         id: 4,
         text: 'Автостопом по галактике',
         author: 'Дуглас Адамс'
      },
      {
         id: 5,
         text: 'Гарри Поттер и Кубок огня',
         author: 'Джоан Роулинг'
      }]
      dispatch(craeteMassageList(list))
   }

   const addMsg = () => {
      const userMassage = {
         text: userText || 'Текст',
         author: userAuthor || 'Автор'
      }
      dispatch(addMassage(userMassage))
      setUserText('')
      setUserAuthor('')
   }
   return (
      <>
         <Grid item>
            <Button
               variant="contained"
               color="primary"
               onClick={craeteList}
               startIcon={<PlaylistAddCheckIcon />}>
               Создать список</Button>
         </Grid>
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
               Добавить</Button>
         </Grid>
      </>
   )
}
export default AddForm