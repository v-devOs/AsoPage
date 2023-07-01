import { CSSProperties, FC } from 'react';
import { Card, Grid, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WebIcon from '@mui/icons-material/WebOutlined'

import { IMember } from '@/interfaces';
import Image from 'next/image';

interface Props{
  member: IMember
}

const styleContainerCard: CSSProperties = {
  background: 'blue',
  padding: 50,
  borderRadius: '100%'
}


export const CardMember:FC<Props> = ({ member }) => {
  return (
    
    <div >
      <div style={styleContainerCard}>
        <Image
          width={200}
          height={200}
          src={member.img}
          alt="Imagen de miembro de Aso"
        />
      </div>

      <Box sx={{ textAlign: 'center'}}>
        <Typography variant='body1'>{ member.name }</Typography>
        <Typography variant='body1'>{ member.charge }</Typography>
      </Box>
    </div>
    
  )
}
