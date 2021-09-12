import { useState, useEffect } from "react";
import MassageList from "./components/MassageList/MassageList";
import './App.css'
// import UserMassage from "./components/UserMassage/UserMassage";

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
  const addMassage = () => {
    const userMassage = {
      id: (massageList.length + 1),
      text: userText || 'Текст',
      author: userAuthor || 'Автор'
    }
    setMassageList(prev => [...prev, userMassage])
    setShowMsg(true) // показываем сообщение
  }
  useEffect(() => {
    setAutoMassage(`Вы добавили в список текст: ${userText} и Автора: ${userAuthor}`)
    setUserText('') // чистим поля input
    setUserAuthor('') // чистим поля input
  }, [massageList])


  return (
    <div className="App">
      <button className="btn" onClick={craeteMassageList}>Создать список</button>
      <div className="userMassage">
        <input placeholder="text" value={userText} onChange={event => setUserText(event.target.value)} />
        <input placeholder="author" value={userAuthor} onChange={event => setUserAuthor(event.target.value)} />
        <button className="btn" onClick={addMassage}>Добавить</button>
      </div>
      {/* <UserMassage text={userText} author={userAuthor} /> */}
      {showMsg ? <p className="autoMsg">{autoMassage} </p> : null}
      <MassageList massageList={massageList} />

    </div>
  );
}

export default App;
