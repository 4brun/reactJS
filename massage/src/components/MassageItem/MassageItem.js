import { Grid, Card, CardContent, Typography, CardHeader, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { deleteMassage } from '../../actions/massageActions';

const MassageItem = ({ massageList }) => {
   const dispatch = useDispatch()
   const deleteItem = (id) => dispatch(deleteMassage(id))

   return (
      <Grid direction="column" container spacing={4} >
         {massageList.map((item) => (
            <Grid item key={item.id}>
               <Card>
                  <CardHeader action={<IconButton onClick={() => deleteItem(item.id)} >
                     <CloseIcon />
                  </IconButton>} />

                  <CardContent>
                     <Typography variant="h5" pd={4}>{item.author}</Typography>
                     <Typography>{item.text}</Typography>
                  </CardContent>
               </Card>
            </Grid>
         ))}
      </Grid>
   )
}
export default MassageItem