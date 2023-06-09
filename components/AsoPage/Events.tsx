import { Grid, Typography } from "@mui/material"
import { SectionPageLayout } from "../layouts"

export const Events = () => {
  return (
    <SectionPageLayout  title={""} id={"Eventos"} sectionClass={"container-events"} useColorPrimary>
      <Grid item xs={12} display='flex' justifyContent='center'>
        
        <Typography variant="h3" component='h3' sx={{ fontSize: '300%', color: 'white'}}>Proximamente</Typography>

      </Grid>
    </SectionPageLayout>
  )
}
