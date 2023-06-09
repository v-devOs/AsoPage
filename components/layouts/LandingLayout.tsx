import { FC } from "react"
import Head from "next/head"

import { Box, Grid, SxProps, Theme } from "@mui/material"
import { Footer, Navbar, SideMenu } from "../ui"


interface Props{
  children: React.ReactNode
  title: string
}

const stylesProperties: SxProps<Theme>   = {
  position: 'absolute',
  width: '100%%',
  height: '560px',
  // margin: '0 auto 100px auto',
  // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}

export const LandingLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      
      <Grid sx={stylesProperties}  className="container-main fadeIn">
        <nav>
          <Navbar/>
        </nav>

        <SideMenu/>

        <main style={{
          padding: '90px 10px'
        }}>
          { children }
        </main>


        <footer>
          <Footer/>
        </footer>

      </Grid>
      

    </>
  )
}
