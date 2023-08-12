import type { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { UIProvider } from '@/context'

import { lightTheme } from '@/themes'

import '@/styles/globals.css'
import '@/styles/animations.css'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <UIProvider>
      <ThemeProvider theme={ lightTheme }>
          <CssBaseline/>
          <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
