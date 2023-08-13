import { Box, Grid, Typography } from '@mui/material';

const data = [
  {
    name: 'Mision',
    desc: 'Quis sint adipisicing reprehenderit pariatur cillum adipisicing cillum reprehenderit anim irure et veniam occaecat.',
  },
  {
    name: 'Visison',
    desc: 'Quis sint adipisicing reprehenderit pariatur cillum adipisicing cillum reprehenderit anim irure et veniam occaecat.',
  },
  {
    name: 'Lema',
    desc: 'Quis sint adipisicing reprehenderit pariatur cillum adipisicing cillum reprehenderit anim irure et veniam occaecat.',
  },
]

export const AboutWe = () => {
  return (
    <Box sx={{ mt: 15 }}>
      
      
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Typography variant='h3' component='h3'>Mision</Typography>
          <Typography variant='body1'>
            Quis sint adipisicing reprehenderit pariatur cillum adipisicing cillum reprehenderit anim irure et veniam occaecat.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h3' component='h3'>Vision</Typography>
          <Typography variant='body1'>
            Quis sint adipisicing reprehenderit pariatur cillum adipisicing cillum reprehenderit anim irure et veniam occaecat.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h3' component='h3'>Lema</Typography>
          <Typography variant='body1'>
            Quis sint adipisicing reprehenderit pariatur cillum adipisicing cillum reprehenderit anim irure et veniam occaecat.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
