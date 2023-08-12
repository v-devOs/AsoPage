import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material'
import ArrowDown from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import ArrowUp from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

import { DecoredTitle } from '../ui'
import { projectsAso } from '@/data'

export const Projects = () => {

  const [nameProjectToShow, setNameProjectToShow] = useState('Aplicación para cafetería')

  const onClick = ( name: string ) => {
    const valueToSet = name === nameProjectToShow ? '' : name
    setNameProjectToShow( valueToSet )
  }

  return (
    <Grid container spacing={4} sx={{ p: 2, mb: 4}}>

      <Grid item xs={12} md={6}>
        <DecoredTitle title='Nuestros projectos' useColorAlternative>
          <Typography variant='body1'>
            Cupidatat aute veniam magna sunt adipisicing tempor. Excepteur occaecat voluptate consequat qui sit incididunt tempor incididunt consectetur dolor deserunt. Esse ipsum nisi amet minim sunt minim fugiat.
          </Typography>
        </DecoredTitle>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container>
          {
            projectsAso.map( ({ _id, desc, nameProject, membersManager }) => (

              <Grid
                onClick={() => onClick(nameProject)} 
                item
                key={_id}
                xs={12}
                sx={{background: '#E7e7e7', color: '#101010', mb: 1, p: 2, borderRadius: '10px'}}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Typography variant='body1'>{ nameProject  }</Typography>

                  <ArrowDown
                    className='fade-in' 
                    sx={{ display: nameProject === nameProjectToShow ? 'none' : 'bock'}}/>
                  <ArrowUp
                    className='fade-in' 
                    sx={{ display: nameProject === nameProjectToShow ? 'block' : 'none'}}/>
                </Box>


                <Grid className='fade-in' sx={{ 
                    background: 'whitesmoke', 
                    p: 2, borderRadius: '5px', 
                    display: nameProject === nameProjectToShow ? 'block' : 'none'
                  }}
                >
                  <Typography variant='body2'>{ desc }</Typography>
                </Grid>

              </Grid>
            ))
          }
        </Grid>
      </Grid>

    </Grid>
  )
}
