import { Grid, Card, CardContent, Typography } from '@material-ui/core'

const MassageList = ({ massageList }) => {
   return (

      <Grid direction="column" container spacing={4} >
         {massageList.map((item) => (
            <Grid item key={item.id}>
               <Card>
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
export default MassageList