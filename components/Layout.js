import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    const { children, title = 'Next.js Basic' } = props
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="theme-color" content="#000000" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../static/css/style.css" />

                <title>{title}</title>
            </Head>

            <div className="container-fluid">
                <Header />
                <div className="container">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout