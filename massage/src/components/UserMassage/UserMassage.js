import { useEffect } from "react"

const UserMassage = ({ text, author }) => {

   const msg = useEffect(() => {
      <p>Вы добавили в список текст: <span>{text}</span> И Автора: <span>{author}</span></p>
   })

   return (
      <>
         {msg}
      </>
   )
}
export default UserMassage