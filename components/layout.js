import Navbar from './navbar'
import Footer from './footer'

import Head from 'next/head'

export default function layout( { children } ){

    return (
        <>
            <Head>
                <title>PokeNext</title>
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>

            <Navbar />

            <main className='main-container'>
                { children }
            </main>

            <Footer />
        </>

    )

}