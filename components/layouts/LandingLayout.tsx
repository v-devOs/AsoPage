import { FC } from "react"
import Head from "next/head"

import { Box, Grid, SxProps, Theme } from "@mui/material"
import { Footer, Navbar, SideMenu } from "../ui"


interface Props{
  children: React.ReactNode
  title: string
  pageDescription: string
}

const stylesProperties: SxProps<Theme>   = {
  position: 'absolute',
  width: '100%%',
  height: '560px',
  // margin: '0 auto 100px auto',
  // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  backgroundImage: { sm: 'linear-gradient(rgba(5,7,12,0.75), rgba(5,7,12,0.75)), url("/images/wallpaper2-mobile.jpg")', 
                      md: 'linear-gradient(rgba(5,7,12,0.75), rgba(5,7,12,0.75)), url("/images/wallpaper2.jpg")'}
}

export const LandingLayout: FC<Props> = ({ children, title, pageDescription}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription}/>

        <meta name = 'og:title' content ={ title} />
        <meta name = 'og:description' content={pageDescription}/>
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
