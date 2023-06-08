import { AppBar, Box, Toolbar, Typography, Link, Button, IconButton, SxProps, Theme } from "@mui/material"

import MenuOutlined from '@mui/icons-material/MenuOutlined'
import { navbarTags } from "./constants"
import { useRouter } from "next/router"



const stylesResponsive: SxProps<Theme> = {
  display: { xs: 'none', sm: 'flex'}
}

export const Navbar = () => {

  const router = useRouter()

  return (
    <AppBar >
      <Toolbar
      sx={{ margin: { xs: '30px 15px', sm: '50px 150px'}}}>
        
        <Link href='#main'>
          <Typography variant="h5" color='primary' >Asociacion Sc</Typography>
        </Link>

        <Box flex={1}></Box>

        <Box sx={stylesResponsive}>
          {
            navbarTags.map( tag => (
              <Link 
                key={tag} 
                onClick={ () => router.push(`/#${tag}`)}
                component='span'
                color='primary' 
                sx={{ m: '0px 20px', cursor: 'pointer'}}>
                {tag}
              </Link>
            ))
          }
        </Box>

        <IconButton sx={{ display: { xs: 'block', sm: 'none'}}}>
          <MenuOutlined/>
        </IconButton>


      </Toolbar>
    </AppBar>
  )
}
