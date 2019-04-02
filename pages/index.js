import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'

const HomePage = (props) => {
    console.log(props.blogsData)
    return (
        <Layout title="หน้าแรก - basic Next.js">
            <div className="row">
                <div className="col-12">
                    <h1>หน้าแรก</h1>
                </div>
            </div>
        </Layout>
    )
}

HomePage.getInitialProps = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return ({
        blogsData: data
    })
}

export default HomePage