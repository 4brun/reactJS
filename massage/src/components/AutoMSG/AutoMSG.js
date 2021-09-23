import { Snackbar, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { hideAutoMSG } from "../../actions/autoMsgActions";


const AutoMSG = () => {

   const autoMassage = useSelector((state) => state.autoMassage)
   const dispatch = useDispatch()
   const style = {
      background: 'rgba(0, 0, 0, 0.87)',
      borderRadius: 3,
      color: 'white',
      padding: '10px',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.87)',
   };

   const handleClose = (reason) => {
      if (reason === 'clickaway') {
         return
      }
      dispatch(hideAutoMSG(false))
   }

   return (
      <Snackbar
         open={autoMassage.showMsg}
         autoHideDuration={1000}
         onClose={handleClose}>

         <Typography style={style}>
            {autoMassage.massage}
         </Typography>

      </Snackbar>
   )
}

export default AutoMSG