import React, { useState } from "react";
import Header from "../CommonComponents/Header";
import { AddData } from "../Services/API";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const WriteBlog = () => {
  const details = {
    title: "Write Blog",
    description: "A Blog Theme by Start Bootstrap",
  };
  const initialData = {
    title: "",
    authorName: "",
    subTitle: "",
    blogDesc: "",
    photo: "",
    date: '',
    time: '',
  };
  const [blogs, setBlogs] = useState(initialData);
  const [error,setError]=useState({})
  const navigate=useNavigate()
  const validation=()=>{
    let error={}
    if(!blogs.title){
      error.title="Blog title is required"
    }
    if(!blogs.authorName){
      error.authorName="Author Name is required"
    }
    if(!blogs.subTitle){
      error.subTitle="SubTitle is required"
    }
    if(!blogs.blogDesc){
      error.blogDesc="Blog Description  is required"
    }
    return error
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    const currentDate = new Date();

    const date = currentDate.toISOString().split('T')[0];
    const time = currentDate.toTimeString().split(' ')[0];
  
    setBlogs({
      ...blogs,
      [name]: value,
      date:date,
      time:time
    });

    if(name==="title"){
      if(value.length===0){
        setError({...error,title:"@Blog title is required"})
        setBlogs({...blogs,title:""})
      }else{
        setError({...error,title:""})
        setBlogs({...blogs,title:value})
      }
    }
    if(name==="authorName"){
      if(value.length===0){
        setError({...error,authorName:"@Author Name is required"})
        setBlogs({...blogs,authorName:""})
      }else{
        setError({...error,authorName:""})
        setBlogs({...blogs,authorName:value})
      }
    }
    if(name==="subTitle"){
      if(value.length===0){
        setError({...error,subTitle:"@SubTitle is required"})
        setBlogs({...blogs,subTitle:""})
      }else{
        setError({...error,subTitle:""})
        setBlogs({...blogs,subTitle:value})
      }
    }
  
  };
  console.log(blogs);
const handleEditorChange = (event, editor) => {
  const value=event.target
  const data = editor.getData();
  setBlogs({
    ...blogs,
    blogDesc: data
  });
 
    if(value?.length===0){
      setError({...error,blogDesc:"@Blog Description  is required"})
      setBlogs({...blogs,blogDesc:""})
    }else{
      setError({...error,blogDesc:""})
      setBlogs({...blogs,blogDesc:data})
    }
  
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    let ErrorList = validation();
    setError(validation());
    
    if (Object.keys(ErrorList).length === 0){
    await AddData(blogs);
    console.log(blogs);
    toast.success("Blog added successfully")
    setBlogs(initialData);
    setTimeout(() => {
      navigate("/")
    }, 1000);
   
    }
  };
  
  return (
    <>
      <Header details={details} />
      <ToastContainer/>
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="my-5">
            <h1>Write Your Blogs</h1>
            <form type="post" onSubmit={handleSubmit}>
              <div class="form-floating">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={blogs.title}
                  onChange={handleChange}
                />
                <label for="name">Title</label>
                <span style={{ color: "red" }}>{error.title}</span>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Author Name"
                  name="authorName"
                  value={blogs.authorName}
                  onChange={handleChange}
                />
                <label for="email">Author Name</label>
                <span style={{ color: "red" }}>{error.authorName}</span>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Sub Title"
                  name="subTitle"
                  value={blogs.subTitle}
                  onChange={handleChange}
                />
                <label for="phone">Sub Title</label>
                <span style={{ color: "red" }}>{error.subTitle}</span>
              </div>
              <label for="phone">Write Your Blog</label>
              <div class="form-floating">
                {/* <textarea
                  name="blogDesc"
                  
                  onChange={handleChange}
                  value={blogs.blogDesc}
                ></textarea> */}
                 <CKEditor
                editor={ClassicEditor}
                data={blogs.blogDesc}
                onChange={handleEditorChange}
              />
              
              <span style={{ color: "red" }}>{error.blogDesc}</span>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  type="file"
                  name="photo"
                  onChange={(e) =>
                    setBlogs({ ...blogs, photo: e.target.files[0].name })
                  }
                />
                <label for="email">image</label>
              </div>

              <br />

              <button class="btn btn-primary" onChange={handleSubmit}>
                Write Blogs
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteBlog;

  
