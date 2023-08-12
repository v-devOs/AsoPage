import { membersAso } from '@/data'
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import React from 'react'

export const Gallery = () => {
  return (
    <>
      {
        membersAso.map( memb => (
          <Card
            className='appearAndIncrementWidth' 
            key={ memb._id } 
            sx={{ width: '200px', background: '#181818', color: 'white', mb: 2}}>
            <CardMedia
              component='img'
              alt={ memb.name }
              src={ memb.img }
              sx={{ width: '100%'}}
            />

            <CardContent>
              <Typography variant='body1'>{ memb.charge }: { memb.name }</Typography>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
