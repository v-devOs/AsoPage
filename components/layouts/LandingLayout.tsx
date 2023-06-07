import { FC } from "react"
import Head from "next/head"

import { Box, Grid } from "@mui/material"
import { Navbar, SideMenu } from "../ui"


interface Props{
  children: React.ReactNode
  title: string
}

export const LandingLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      
      <Grid sx={{ height: '560px'}}  className="container-main">
        <nav>
          <Navbar/>

        </nav>

        <SideMenu/>

        <main style={{
          padding: '90px 150px'
        }}>
          { children }
        </main>

      </Grid>
      

    </>
  )
}
