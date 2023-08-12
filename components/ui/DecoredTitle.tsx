import { ReactNode, FC } from 'react';
import { Typography, Divider } from '@mui/material';


interface Props{
  title: string,
  children: ReactNode
  useColorAlternative?: boolean
}

export const DecoredTitle: FC<Props> = ({ children, title, useColorAlternative }) => {
  return (
    <>
      <Typography variant='h2' component='h2'>{ title }</Typography>

      <Divider sx={{ width: '100%', height: '5px', background: useColorAlternative ? 'yellow' : '#3A64D8', mb: 2, mt: 2}}/>

      {
        children
      }
    </>
  )
}
