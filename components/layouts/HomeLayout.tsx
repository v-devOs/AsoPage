import Head from 'next/head';
import React from 'react'
import { ReactNode, FC } from 'react';
import { Footer, Navbar } from '../ui';


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

      {/* <nav>
        <Navbar/>
      </nav> */}

      <main  className='fade-in'>
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
