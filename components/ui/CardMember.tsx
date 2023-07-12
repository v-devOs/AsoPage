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


export const CardMember:FC<Props> = ({ member }) => {
  return (
    <Card sx={{ width: '250px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', p: 2 }}>
      <CardMedia
        component='img'
        height={240}
        image={'/images/me.png'}
        alt='Prouesta Asociacion SC'
        sx={{ borderRadius: '5px'}}
      />

      <CardContent sx={{ p: '10px 0'}}>
        <Typography variant='h6'>{member.name}</Typography>

        <Typography variant='body1'>{ member.charge }</Typography>
      </CardContent>
      
    </Card>
    
  )
}
