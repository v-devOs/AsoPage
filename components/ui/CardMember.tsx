import { FC } from 'react';
import { Card, Grid, CardMedia, CardContent, Typography, IconButton } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WebIcon from '@mui/icons-material/WebOutlined'

import { IMember } from '@/interfaces';

interface Props{
  member: IMember
}

export const CardMember:FC<Props> = ({ member }) => {
  return (
    <Card sx={{ width: '80%' , display: {md:'flex', sm: 'block'}, margin: '0 auto'}}  >
      <Grid item  >
        <CardMedia
          component='img'
          image={member.img}
          alt='Prouesta Asociacion SC'
          sx={{ height: { xs: 140, md: 240}}}
        />
      </Grid>

    <Grid item display='flex' flexDirection={"column"}>
      <CardContent>
        <Typography gutterBottom variant='body1' component='div'>{member.name}</Typography>

        <Typography variant='body2'>
          { member.charge }
        </Typography>

        
        {
          member.links && (
            <Grid item mt={12}>
            <IconButton>
              <FacebookIcon/>
            </IconButton>

            <IconButton>
              <InstagramIcon/>
            </IconButton>

            <IconButton>
              <WebIcon/>
            </IconButton>
          </Grid>
          )
        }
      </CardContent>
    </Grid>

  </Card>
  )
}
