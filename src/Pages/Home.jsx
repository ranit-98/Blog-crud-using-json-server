import React, { useEffect, useState } from 'react'
import HomePageHeader from '../Components/HomePageHeader'
import Header from '../CommonComponents/Header'
import { GetData, deleteUser } from '../Services/API'
import { Link } from 'react-router-dom'

const Home = () => {
    const details={
        title:"Clean Blog",
        description:"A Blog Theme by Start Bootstrap"
    }
    const [blogs,setBlogs]=useState()
    const getBlogs=async()=>{
       const res=await GetData()
       setBlogs(res?.data)
    }
    useEffect(()=>{
      getBlogs()
    },[])
    console.log(blogs);
    const handleDelete=async(id)=>{
      await deleteUser(id)
      getBlogs()
  }
  return (
        <>
        <Header details={details}/>
        <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          {
            blogs?.slice(0,blogs.length).reverse().map((blog)=>{
            return  <div class="col-md-10 col-lg-8 col-xl-7">
                <div class="post-preview">
                  <h1 class="post-title"><Link to={`/blog-details/${blog?.id}`}>{blog?.title}</Link></h1>
                  <h3 class="post-subtitle">{blog?.subTitle}</h3>
                  <p class="post-meta">
                            Posted by
                            <Link> {blog?.authorName} </Link>
                            on { blog?.date}
                        </p>
                        <button className='btn btn-danger' onClick={()=>{handleDelete(blog?.id)}}>Delete</button>
                  <hr class="my-4" />
                </div>
              </div>
            })
          }
        </div>
        </div>
        </>
  )
}

export default Home
