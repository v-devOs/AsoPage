import { useContext, useEffect, useState } from "react"

import { UIContext } from "@/context"

import { AppBar, Box, Toolbar, Typography, Link, Button, IconButton, SxProps, Theme } from "@mui/material"

import MenuOutlined from '@mui/icons-material/MenuOutlined'
import { navbarTags } from "./constants"
import  { useRouter } from "next/router"



const stylesResponsive: SxProps<Theme> = {
  display: { xs: 'none', sm: 'flex'}
}

export const Navbar = () => {

  const { onToggleSideMenu } = useContext( UIContext )

  const router = useRouter()
  
  const [ scrollInY, setScrollInY ] = useState<number>();

  useEffect(() => {
    
    window.addEventListener('scroll', () => (
      setScrollInY( window.scrollY )
    ))

    return () => {
      window.removeEventListener('scroll', () => (setScrollInY(window.scrollY)))
    }
  }, [])

 

  return (
    <AppBar 
      className={`${ scrollInY! >= 380 && 'fadeIn'}`}
      sx={{padding: {sm: "10px", md: "10px 30px", lg: "10px 150px"},
          background: `${ scrollInY! >= 380 ? 'rgba(37,37,37, 0.8)' : 'none'}`}}>
      <Toolbar>
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

        <IconButton 
          sx={{ display: { xs: 'block', sm: 'none'}}}
          onClick={ () => onToggleSideMenu() }
        >
          <MenuOutlined color="primary"/>
        </IconButton>


      </Toolbar>
    </AppBar>
  )
}
