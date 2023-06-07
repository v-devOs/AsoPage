import { Box, Divider, Drawer, Link, List, ListItem, Typography } from '@mui/material'
import { navbarTags } from './constants'

export const SideMenu = () => {
  return (
    <Drawer
      open={false}
      anchor='right'
      onClose={ () => console.log('Hola')}
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
              <ListItem key={tag}>

                <Link href={`#${tag}`}>
                  { tag }
                </Link>

              </ListItem>
            ))
          }
        </List>


      </Box>
    </Drawer>
  )
}
