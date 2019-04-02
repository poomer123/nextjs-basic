import React from 'react'
import Layout from '../components/Layout'

const NotFound = (props) => {
    const { statusCode } = props
    return (
        <Layout title="404 - basic Next.js">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>404. Page not found</h1>
                    <p>Sorry, Something wrong</p>
                    {statusCode ?
                        <small>An error {statusCode}</small> :
                        <small>An error occurred on client</small>
                    }
                   
                </div>
            </div>
        </Layout>
    )
}

NotFound.getInitialProps = async ({ res, error }) => {
    const statusCode = res ? res.statusCode : error ? error.statusCode : null
    return {statusCode}
}

export default NotFound