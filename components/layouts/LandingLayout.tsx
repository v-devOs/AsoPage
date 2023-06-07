import { Box, Grid } from "@mui/material"
import { FC } from "react"
import { Navbar } from "../ui"


interface Props{
  children: React.ReactNode
}

export const LandingLayout: FC<Props> = ({ children }) => {
  return (
    <Box>

      <Navbar/>
      
      <Box sx={{zIndex: -1}}>
        <img style={{ position: 'absolute', height: '100vh', left: '-150px'}} src="https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg" alt="" />
      </Box>

      <Grid item>
        { children }
      </Grid>

    </Box>
  )
}
