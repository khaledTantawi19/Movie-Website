import React, { useState, useEffect } from "react";
import "./blog.css";
import BlogCard from "../Components/BlogCard";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const fetchdata = () => {
    fetch("http://localhost:3000/Data/blogData.json")
      .then((res) => res.json())
      .then((Data) => {
        setBlogs(Data);
      })

      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <section id="blogs" className="blogs">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title"> Our Blog</h4>
        </div>
        <div className="row mt-5">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}

export default Blog;
