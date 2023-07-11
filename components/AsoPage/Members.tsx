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
      <Grid 
        item 
        display='flex' 
        flexWrap='wrap' 
        justifyContent='space-evenly'
        gap={10}
      >

        {
          membersAso.map( (member) => (
            <CardMember member={member} key={member._id} />
          ))
        }
      </Grid>

    </SectionPageLayout>
  )
}
