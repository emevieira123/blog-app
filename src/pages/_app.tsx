import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderMenu } from '../_shared/_components/HeaderMenu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HeaderMenu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
