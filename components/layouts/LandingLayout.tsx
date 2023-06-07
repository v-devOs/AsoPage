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
      
      <nav>
        <Navbar/>
      </nav>

      <SideMenu/>

      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'

      }}>
        { children }
      </main>

    </>
  )
}
