import { Button, TextField } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showAutoMSG } from "../../actions/autoMsgActions"
import { addChat } from "../../actions/chatsActions"
import { createMassageList } from "../../actions/massageActions"
import ChatIcon from '@material-ui/icons/Chat';

const AddChatForm = () => {
   const [chatName, setChatName] = useState('')
   const chats = useSelector((state) => state.chats.chats)
   const dispatch = useDispatch()

   const submitHandler = (event) => {
      event.preventDefault()
      dispatch(addChat(chatName || 'New chat')) // добавляем название чата в store
      dispatch(showAutoMSG(`Вы добавили чат - ${chatName || 'New chat'}`))
      dispatch(createMassageList(chats.length)) // добавляем новый массив для сообщений в store сообщений
      setChatName('')
   }
   return (
      <>
         <form onSubmit={submitHandler}>
            <TextField
               id="outlined-basic"
               variant="outlined"
               size="small"
               value={chatName}
               onChange={(event) => setChatName(event.target.value)}
               label="New chat"
            />
            <Button
               variant="contained"
               color="primary"
               startIcon={<ChatIcon />}
               type="submit">Создать чат</Button>
         </form>
      </>
   )
}

export default AddChatForm