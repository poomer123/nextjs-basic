import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'

const Detail = (props) => {
    const { blogData, userData } = props
    return (
        <Layout title="ข่าว - basic Next.js">
            <div className="row">
                <div className="col-12">
                    <h1 className="title">{blogData.title}</h1>
                    <p className="my-5 detail">{blogData.body}</p>
                    <p className="text-right">{userData.name}</p>
                    <p className="text-right"><small>{userData.email}</small></p>
                </div>
            </div>
            <style jsx>
            {`
                .title {
                    font-size: 36px;
                    color: #0acae8;
                }
                .detail {
                    text-align: justify;
                    font-size: 22px;
                }
            `}
            </style>
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