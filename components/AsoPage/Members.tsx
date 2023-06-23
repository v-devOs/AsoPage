import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WebIcon from '@mui/icons-material/WebOutlined'

import { SectionPageLayout } from "../layouts"
import { membersAso } from "@/data"
import { CardMember } from "../ui"

export const Members = () => {
  return (
    <SectionPageLayout title={"Integrantes"} id={"Integrantes"} sectionClass={""}>
      {
        membersAso.map( (member) => (
          <Grid item xs={12} md={6} lg={4} key={member._id} mb={3} className="" onFocus={ () => console.log('Hola')}>
            <CardMember member={member} />
          </Grid>
        ))
      }

    </SectionPageLayout>
  )
}
