import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import Link from 'next/link'

const HomePage = (props) => {
    const renderBlogs = (blogs = {}) => {
        return (
            blogs.map(
                blog => {
                    return (
                        <div key={blog.id} className="col-4">
                            <Link href={'/blog/detail?id='+ blog.id}>
                                <a><h4 className="mt-3">{blog.title}</h4></a>
                            </Link>
                            <p>{blog.body}</p>
                            <hr/>
                        </div>
                    )
                }
            )
        )
    }
    return (
        <Layout title="หน้าแรก - basic Next.js">
            <div className="row">
                <div className="col-12">
                    <h1>หน้าแรก</h1>
                </div>
            </div>
            <div className="row">
                {renderBlogs(props.blogsData)}
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