import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'

const Detail = (props) => {
    const { blogData } = props
    return (
        <Layout title="ข่าว - basic Next.js">
            <div className="row">
                <div className="col-12">
                    <h1>{blogData.title}</h1>
                    <p>{blogData.body}</p>
                </div>
            </div>
        </Layout>
    )
}

Detail.getInitialProps = async ({ query }) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ query.id)
    return ({
        blogData: data
    })
}

export default Detail