import { Divider, Grid, IconButton, Typography } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export const Footer = () => {
  return (
    <Grid container sx={{ background: '#151515', color: 'white', p: 2, pt: 10 }} spacing={4}>
      
      <Grid item sm={12} md={6}>
        <Typography variant="body2" mb={2}>Todos los derechos reservados Aso SC</Typography>
        <Divider color="white"/>

        <Typography variant="body2" mt={2}>El caracter de mejorar</Typography>
        <Typography variant="body2">Sitio web dedicado a divulgar las propuestas, proyectos y dar conocer los integrantes de este equipo que se postula 
          para ser la Asociacion de Sistemas Computacionales y posteriormente llevar a cabo la informacion y recopilacion de datos para los eventos a realizar
        </Typography>
        <Typography variant="body2">Siguenos en nuestras redes sociales</Typography>

        <IconButton>
          <FacebookIcon sx={{ color: 'white'}}/>
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ color: 'white'}}/>
        </IconButton>
        
      </Grid>

      <Grid item sm={12} md={6} >
        <Typography variant="body2">Sitio web desarrollado por el integrante: Uriel Emiliano Galindo López </Typography>

        <Typography variant="body2">Redes sociales e informacion de contacto</Typography>

        <IconButton>
          <FacebookIcon sx={{ color: 'white'}}/>
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ color: 'white'}}/>
        </IconButton>

        <IconButton sx={{ color: "white" }}>
          <WhatsAppIcon/>
          <Typography variant="body2">1234567890</Typography>
        </IconButton>

      </Grid>

    </Grid>
  )
}
