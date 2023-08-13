import { useContext } from 'react';

import { AppBar, Link, Toolbar, Box, Typography, IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';

import { UIContext } from '@/context';
import { navbarTags } from './constants';

export const Navbar = () => {

  const { onToggleSideMenu, isSideMenuOpen } = useContext(UIContext)

  return (
    <AppBar>
      <Toolbar>
        <Link href='/' >
          <Typography variant='body1'>Asociacion</Typography>
        </Link>

        <Box sx={{ flex: 1}}></Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }}}>

          {
            navbarTags.map( tag => (
              <Link key={tag} href={`#${tag}`} >
                <Typography variant='body1' sx={{ mr: 2}}>{ tag }</Typography>
              </Link>
            ))
          }
        </Box>

        <Box>
          <IconButton 
            sx={{ color: 'white', display: { xs: 'block' , md: 'none'}}}
            onClick={onToggleSideMenu}
          >
            <MenuOutlinedIcon sx={{ display: isSideMenuOpen ? 'none' : 'block'}}/>
            <CloseIcon sx={{ display: isSideMenuOpen ? 'block' : 'none'}}/>
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  )
}
