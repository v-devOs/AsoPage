import { Grid, Typography } from "@mui/material"
import { FC, ReactNode } from "react"

interface Props{
  children: ReactNode
  title: string
  id: string
  sectionClass: string
  useColorPrimary?: boolean
}

export const SectionPageLayout: FC<Props> = ({ children, title, id, useColorPrimary, sectionClass }) => {
  return (
    <div id={id} className={sectionClass} style={{ paddingBottom: '90px'}}>
      <Grid container spacing={2}>

        <Grid item xs={12} sx={{ textAlign: { sm: 'left', md: 'center'}}} mt={8} mb={8}>
          <Typography 
            variant='h2' 
            component='h2'
            pl={'30px'}
            color={ useColorPrimary ? 'primary' : '#252525'}
          >{title}</Typography>
        </Grid>

        {
          children
        }
        
      </Grid>
      
    </div>
  )
}
