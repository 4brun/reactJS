import { useState, useEffect } from "react";
import MassageList from "./components/MassageList/MassageList";
// import './App.css'
import { TextField, Button, Grid, Container, Snackbar, Typography } from "@material-ui/core";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ChatList from "./components/ChatList/ChatList";

function App() {
  const [massageList, setMassageList] = useState([])
  const [userText, setUserText] = useState('')
  const [userAuthor, setUserAuthor] = useState('')
  const [autoMassage, setAutoMassage] = useState('')
  const [showMsg, setShowMsg] = useState(false)
  const craeteMassageList = () => setMassageList([{
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
  }
  ])
  const style = {
    background: 'rgba(0, 0, 0, 0.87)',
    borderRadius: 3,
    color: 'white',
    padding: '10px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.87)',
  };

  const addMassage = () => {
    const userMassage = {
      id: (massageList.length + 1),
      text: userText || 'Текст',
      author: userAuthor || 'Автор'
    }
    setMassageList(prev => [...prev, userMassage])
    setShowMsg(true) // показываем сообщение
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setShowMsg(false)
  }

  useEffect(() => {
    setAutoMassage(`Вы добавили в список текст: ${userText} и Автора: ${userAuthor}`)
    setUserText('') // чистим поля input
    setUserAuthor('') // чистим поля input
  }, [massageList])


  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={6} sm={6}>
            <ChatList />
          </Grid>

          <Grid
            container
            direction="column"
            alignItems="flex-end"
            spacing={6}
            md={6}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={craeteMassageList}
                startIcon={<PlaylistAddCheckIcon />}>
                Создать список</Button>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="text"
                variant="outlined"
                size="small"
                inputRef={input => input && input.focus()}
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
                onClick={addMassage}
                startIcon={<AddBoxIcon />}>
                Добавить</Button>
            </Grid>

            {/* <button className="btn" >Добавить</button> */}
            <Snackbar
              open={showMsg}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Typography style={style}>
                {autoMassage}
              </Typography>

            </Snackbar>
            {/* {showMsg ? <p className="autoMsg">{autoMassage} </p> : null} */}
            <MassageList massageList={massageList} />
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default App;
