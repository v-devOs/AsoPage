import React from 'react'
import { AppBar, Link, Toolbar, Box } from '@mui/material';
import { navbarTags } from './constants';

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link href='/' sx={{ ml: 2}}>
          Nombre Aso
        </Link>

        <Box sx={{ flex: 1}}></Box>

        {
          navbarTags.map( tag => (
            <Link key={tag} href={`#${tag}`} sx={{ mr: 2}}>
              { tag }
            </Link>
          ))
        }
      </Toolbar>
    </AppBar>
  )
}
