const MassageList = ({ massageList }) => {
   return (
      <div>
         {massageList.map((item) => (

            <div key={item.id}>
               <h3>{item.author}</h3>
               <p>{item.text}</p>
            </div>
         ))}
      </div>
   )
}
export default MassageList