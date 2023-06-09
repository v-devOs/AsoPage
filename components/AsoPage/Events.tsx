import { Grid, Typography } from "@mui/material"
import { SectionPageLayout } from "../layouts"

export const Events = () => {
  return (
    <SectionPageLayout  title={"Proximamente"} id={"Eventos"} sectionClass={"container-events"}>
      <Grid item xs={12} display='flex' justifyContent='center'>
        
          <Typography variant="h3" component='h3' sx={{ fontSize: '200%', color: '#252525'}}>Eventos</Typography>

      </Grid>
    </SectionPageLayout>
  )
}
