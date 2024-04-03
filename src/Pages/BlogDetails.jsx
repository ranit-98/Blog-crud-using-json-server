import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetImage, GetSingleData } from "../Services/API";
import Header from "../CommonComponents/Header";
import HomePageHeader from "../Components/HomePageHeader";

const BlogDetails = () => {
  const details={
    title:"Clean Blog Details",
    description:"A Blog Theme by Start Bootstrap"
}
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [image, setImage] = useState();
  const getBlog = async () => {
    const res = await GetSingleData(id);
    setBlog(res?.data);
    console.log(res?.data?.photo);
    const imgRes = await GetImage(res?.data?.photo);
    setImage(imgRes?.config?.url);
    console.log(imgRes);
  };

  useEffect(() => {
    getBlog();
    
  }, [id]);
  
 
  
  
  return (
    <>
      <header class="masthead" style={{backgroundImage: "url('/assets/img/about-bg.jpg')"}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1>Details</h1>
                            <span class="subheading">This is what I do.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    <div className="container">
      <h1 >{blog?.title}</h1>
      <h5> Posted by {blog?.authorName} on { blog?.date}</h5>
      <div
      dangerouslySetInnerHTML={{__html: blog?.blogDesc}}
    />
    </div>
    </>
  );
};

export default BlogDetails;
