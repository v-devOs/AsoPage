import { CSSProperties, FC } from 'react';
import {  Grid, CardMedia, CardContent, Typography, IconButton, Box, Card } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WebIcon from '@mui/icons-material/WebOutlined'

import { IMember } from '@/interfaces';
import Image from 'next/image';

interface Props{
  member: IMember
}

const styleContainerCard: CSSProperties = {
  // background: '#252525',
  border: '1px solid #252525',
  width: '250px'
  // textAlign: 'center'
  // borderRadius: '100%'
}


export const CardMember:FC<Props> = ({ member }) => {
  return (
    <Card sx={{}}>
      <CardMedia
        component='img'
        height={240}
        image={'/images/me.png'}
        alt='Prouesta Asociacion SC'
      />

      <CardContent>
        <Typography variant='h6'>{member.name}</Typography>

        <Typography variant='body1'>{ member.charge }</Typography>
      </CardContent>
      
    </Card>
    
  )
}
