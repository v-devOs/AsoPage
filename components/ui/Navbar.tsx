import { AppBar, Box, Toolbar, Typography, Link, Button, IconButton, SxProps, Theme } from "@mui/material"

import MenuOutlined from '@mui/icons-material/MenuOutlined'
import { navbarTags } from "./constants"



const stylesResponsive: SxProps<Theme> = {
  display: { xs: 'none', sm: 'flex'}
}

export const Navbar = () => {
  return (
    <AppBar >
      <Toolbar
      sx={{ margin: { xs: '30px 15px', sm: '50px 80px'}}}>
        
        <Link href='#main'>
          <Typography variant="h6">Aso Sc</Typography>
        </Link>

        <Box flex={1}></Box>

        <Box sx={stylesResponsive}>
          {
            navbarTags.map( tag => (
              <Link 
                key={tag} 
                href={`#${tag}`} 
                component='span'
                color='primary' 
                sx={{ m: '0px 20px'}}>
                <Button>
                  { tag }
                </Button>
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