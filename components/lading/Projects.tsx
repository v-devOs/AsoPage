import { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material'
import ArrowDown from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

import { DecoredTitle } from '../ui'
import { projectsAso } from '@/data'

export const Projects = () => {

  const [nameProjectToShow, setNameProjectToShow] = useState('')

  const onClick = ( name: string ) => {
    const valueToSet = name === nameProjectToShow ? '' : name
    setNameProjectToShow( valueToSet )
  }

  return (
    <Grid container spacing={4} sx={{ p: 2}}>

      <Grid item xs={12} md={6}>
        <DecoredTitle title='Projectos' useColorAlternative>
          <Typography variant='body1'>
            Cupidatat aute veniam magna sunt adipisicing tempor. Excepteur occaecat voluptate consequat qui sit incididunt tempor incididunt consectetur dolor deserunt. Esse ipsum nisi amet minim sunt minim fugiat.
          </Typography>
        </DecoredTitle>
      </Grid>

      <Grid item xs={12} md={6}>
          {
            projectsAso.map( ({ _id, desc, nameProject, membersManager }) => (
              <Button
                className='' 
                key={ _id} 
                fullWidth
                sx={{ mb: 1, background: '#E7e7e7', color: '#101010', display: 'flex', flexWrap: 'wrap'}}
                variant='contained'
                onClick={ () => onClick( nameProject )}
              >
                <Typography variant='body1'>{ nameProject } { <ArrowDown/>}</Typography>

                <Grid
                  container
                  sx={{ 
                    background: 'whitesmoke', 
                    p: 2, display: nameProject === nameProjectToShow ? 'block' : 'none', 
                    borderRadius: '5px',
                    textAlign: 'justify'
                  }}
                  className='fade-in'
                >
                  <Typography variant='body2'>
                    { desc }
                  </Typography>
                </Grid>
              </Button>
            ))
          }
      </Grid>

    </Grid>
  )
}
