import { Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProfile, deleteProfile } from "../../actions/profileActions"


const Profile = () => {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')
   const [gender, setGender] = useState()

   const dispatch = useDispatch()
   const profile = useSelector((state) => state.profile)

   const submitHandler = (event) => {
      event.preventDefault()
      const userProfile = {
         name: name,
         age: age,
         gender: gender
      }
      dispatch(addProfile(userProfile))
      setName('')
      setAge('')
   }
   const clearProfile = () => { dispatch(deleteProfile()) }

   return (
      <>
         <form onSubmit={submitHandler}>
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
               <Grid item>
                  <TextField
                     value={name}
                     onChange={(event) => setName(event.target.value)}
                     label="Your name" />
               </Grid>
               <Grid item>
                  <TextField
                     type="number"
                     value={age}
                     onChange={(event) => setAge(event.target.value)}
                     label="Your Age" />
               </Grid>
               <Grid item>
                  <RadioGroup
                     aria-label="gender"
                     name="gender"
                     value={gender}
                     onChange={(event) => setGender(event.target.value)}>
                     <FormControlLabel value="female" control={<Radio />} label="Female" />
                     <FormControlLabel value="male" control={<Radio />} label="Male" />
                     <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
               </Grid>
               <Grid item>
                  <Button variant="contained" type="submit">Add profile</Button>
               </Grid>
            </Grid>
         </form>
         <>
            <Typography variant="h5">
               Name: {profile.name}
            </Typography>
            <Typography>
               Age: {profile.age}
            </Typography>
            <Typography >
               Gender: {profile.gender}
            </Typography>
            <Button variant="contained" onClick={clearProfile}>Delete profile</Button>
         </>
      </>
   )
}

export default Profile