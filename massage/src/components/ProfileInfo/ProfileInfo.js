import CloseIcon from '@material-ui/icons/Close';
import { Card, CardContent, CardHeader, Typography, IconButton } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile } from '../../actions/profileActions';
import { showAutoMSG } from '../../actions/autoMsgActions';

const ProfileInfo = () => {
   const profile = useSelector((state) => state.profile)

   const dispatch = useDispatch()

   const clearProfile = () => {
      dispatch(deleteProfile())
      dispatch(showAutoMSG(`Вы очистили профиль`)) // здесь сообщение вывожу
   }

   return (
      <Card>
         <CardContent>
            <CardHeader action={<IconButton color="secondary" onClick={clearProfile} >
               <CloseIcon />
            </IconButton>} />
            <Typography variant="h5">
               Name: {profile.name}
            </Typography>
            <Typography>
               Age: {profile.age}
            </Typography>
            <Typography >
               Gender: {profile.gender}
            </Typography>
         </CardContent>
      </Card>
   )
}

export default ProfileInfo