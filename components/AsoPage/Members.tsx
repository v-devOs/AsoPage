import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WebIcon from '@mui/icons-material/WebOutlined'

import { SectionPageLayout } from "../layouts"
import { membersAso } from "@/data"

export const Members = () => {
  return (
    <SectionPageLayout title={"Integrantes"} id={"Integrantes"} sectionClass={""}>
      {
        membersAso.map( ({_id, img, name, charge, links}) => (
          <Grid item xs={12} md={6} lg={4}  key={_id} mb={3} className="" onFocus={ () => console.log('Hola')}>
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
                    { charge }
                  </Typography>

                  
                  {
                    links && (
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
          </Grid>
        ))
      }

    </SectionPageLayout>
  )
}
