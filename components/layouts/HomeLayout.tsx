import Head from 'next/head';
import React from 'react'
import { ReactNode, FC } from 'react';
import { Footer, Navbar, SideMenu } from '../ui';


interface Props{
  title:      string,
  desc:       string,
  children:   ReactNode
}


export const HomeLayout: FC<Props> = ({ children, desc, title}) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <nav>
        <Navbar/>
      </nav>

      <SideMenu/>

      <main style={{ margin: '70px 0 0'}}  className='fade-in'>
        {
          children
        }
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}
