import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'

const Detail = (props) => {
    const { blogData, userData } = props
    return (
        <Layout title="ข่าว - basic Next.js">
            <div className="row">
                <div className="col-12">
                    <h1>{blogData.title}</h1>
                    <p className="my-5">{blogData.body}</p>
                    <p className="text-right">{userData.name}</p>
                    <p className="text-right"><small>{userData.email}</small></p>
                </div>
            </div>
        </Layout>
    )
}

Detail.getInitialProps = async ({ query }) => {
    const blogData = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ query.id)
    const userData = await axios.get('https://jsonplaceholder.typicode.com/users/'+ query.id)
    return ({
        blogData: blogData.data,
        userData: userData.data
    })
}

export default Detail