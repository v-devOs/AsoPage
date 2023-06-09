import { useContext } from 'react'
import { UIContext } from '@/context'

import { Box, Divider, Drawer, Grid, IconButton, Link, List, ListItem, Typography } from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

import { navbarTags } from './constants'

export const SideMenu = () => {

  const { isSideMenuOpen, onToggleSideMenu } = useContext( UIContext )

  return (
    <Drawer
      open={ isSideMenuOpen }
      anchor='right'
      onClose={ () => onToggleSideMenu() }
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out'}}
    >
      <Box sx={{ width: 250, paddingTop: 5}}>

        

        <List>

          <ListItem>
            <Typography variant='h6'>Asociacion estudiantil</Typography>
          </ListItem>

          <Divider/>
          {
            navbarTags.map( tag => (
              <ListItem 
                key={tag}
                onClick={ () => onToggleSideMenu() }
              >

                <Link href={`#${tag}`}>
                  { tag }
                </Link>

              </ListItem>
            ))
          }
        </List>

        <Grid>
          <IconButton>
            <FacebookIcon/>
          </IconButton>
          <IconButton>
            <InstagramIcon/>
          </IconButton>
        </Grid>
      </Box>
    </Drawer>
  )
}
