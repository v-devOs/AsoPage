import { Grid, SxProps, Theme } from '@mui/material';
import { Proposals, Projects, Members, Events } from './';


const stylesProperties: SxProps<Theme>   = {
  position: 'absolute',
  width: '95%',
  top: '450px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  height: 'maxContent',
  margin: '0 auto 100px auto',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}

export const SectionsNavbar = () => {


  return (
    <Grid container sx={stylesProperties}>

      <Grid item xs={12}>
        <Proposals/>
      </Grid>

      <Grid item xs={12}>
        <Projects/>
      </Grid>

      <Grid item xs={12}>
        <Members/>
      </Grid>

      <Grid item xs={12}>
        <Events/>
      </Grid>


    </Grid>
  )
}
