import React from 'react'
import { Box, CardMedia, Grid, SxProps, Theme, Typography } from '@mui/material';
import { membersAso } from '@/data'
import Image from 'next/image';

export const Carrousel = () => {
  return (
    <>
      <Box sx={{ position: 'relative', display: 'flex', overflowX: 'scroll', scrollSnapType: 'x' }}>
        {
          membersAso.map( ({ img, _id, name, charge }) => (

            <Grid item key={_id} sx={{ width: 300, background: '#151515', borderRadius: '5px', mr: 2 }}>
              <Image
                src={img}
                alt={name}
                width={230}
                height={300}
              />
              <Typography variant='body1' sx={{ p: 2}}>{charge}: { name }</Typography>
            </Grid>
          ))
        }
      </Box>
    </>
  )
}
