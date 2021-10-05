import { Backdrop, Button, Card, CardContent, CardHeader, CircularProgress, Grid, IconButton, Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { delCountry, showList } from "../../actions/covidActions"
import CloseIcon from '@material-ui/icons/Close';
import { useEffect } from "react";
import { closeLoading, openLoading } from "../../actions/loadingActions";
import { newError } from "../../actions/errorActions";

const Covid = () => {
   const dispatch = useDispatch()

   const list = useSelector((state) => state.covid)
   const loading = useSelector((state) => state.loading)
   const error = useSelector((state) => state.error)

   const deleteItem = (id) => dispatch(delCountry(id))

   const fetchData = async () => {
      dispatch(openLoading())
      try {
         dispatch(showList())
      } catch (error) {
         dispatch(closeLoading())
         dispatch(newError(error))
      }
   }

   useEffect(() => { fetchData() }, [])

   if (list.length) dispatch(closeLoading())

   return (
      <>
         <Grid container direction="column" spacing={4} alignContent="center">
            {list.length ? <Typography variant="h2">Covid in Europe</Typography> : null}
            {error ? <><Typography variant="h3">{error}</Typography> <Button onClick={fetchData}>Retry</Button></> : null}
            {list.map((el) => (
               <Grid item>
                  <Card key={el.id}>
                     <CardHeader
                        title={el.country}
                        action={<IconButton
                           color="secondary"
                           onClick={() => deleteItem(el.id)}>
                           <CloseIcon />
                        </IconButton>} />
                     <CardContent> Confirmed:
                        <Typography variant="h4">
                           {el.confirmed}
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>
         <Backdrop open={loading}>
            <CircularProgress />
         </Backdrop>
      </>
   )
}

export default Covid