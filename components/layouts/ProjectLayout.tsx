import { FC } from "react"
import Head from "next/head"

import { Footer, Navbar, SideMenu } from "../ui"

interface Props{
  children: React.ReactNode
  title: string
  pageDescription: string
}

export const ProjectLayout: FC<Props> = ({ children, title, pageDescription}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription}/>

        <meta name = 'og:title' content ={ title} />
        <meta name = 'og:description' content={pageDescription}/>
      </Head>

      <nav>
        <Navbar useColorDark/>
      </nav>
      
      <main style={{
        padding: '90px 10px',
      }} className="fadeIn">
        { children }
      </main>


      <footer>
        <Footer/>
      </footer>

      

    </>
  )
}
