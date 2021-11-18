import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <React.Fragment>
        <Head>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
            <title>COMÉRCIO LOCAL - Comprar & Vender</title>
            <link rel='shortcut icon' href='/store.png' />
        </Head>
        <Component {...pageProps} />ç{' '}
    </React.Fragment>
)

export default MyApp
