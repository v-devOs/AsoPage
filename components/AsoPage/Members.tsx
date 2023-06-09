import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WebIcon from '@mui/icons-material/WebOutlined'

import { SectionPageLayout } from "../layouts"
import { exampleMembers } from "./basicData"

export const Members = () => {
  return (
    <SectionPageLayout title={"Miembros"} id={"Integrantes"} sectionClass={""}>
      {
        exampleMembers.map( ({id, img, name, cargo}) => (
          <Grid item xs={12} md={6} lg={4}  key={id} mb={3} className="container-member" onFocus={ () => console.log('Hola')}>
            <Card sx={{ width: '80%' , display: {md:'flex', sm: 'block'}, margin: '0 auto'}}  >
              <Grid item  >
                <CardMedia
                  component='img'
                  image={img}
                  alt='Prouesta Asociacion SC'
                  sx={{ height: { xs: 140, md: 240}}}
                />
              </Grid>

              <Grid item display='flex' flexDirection={"column"}>
                <CardContent>
                  <Typography gutterBottom variant='body1' component='div'>{name}</Typography>

                  <Typography variant='body2'>
                    { cargo }
                  </Typography>

                  
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
                </CardContent>
              </Grid>

            </Card>
          </Grid>
        ))
      }
    </SectionPageLayout>
  )
}
