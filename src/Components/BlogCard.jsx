import React from "react";
import "./blogCard.css";

function BlogCard({ blog }) {
  return (
    <div className="blog col-xl-3 col-md-6 mb-4">
      <article>
        <div className="post-img">
          <img className="img-fluid" src={blog.thumbnail} alt="" />
        </div>
        <p className="post-category">{blog.category}</p>

        <h2 className="title">
          <a href="#">{blog.title}</a>
        </h2>

        <div className="d-flex align-items-center">
          <img
            className="img-fluid post-author-img flex-shrink-0"
            src={blog.author.image}
            alt=""
          />
          <div className="post-meta">
            <p className="post-author-list"> {blog.author.name}</p>
            <p className="post-date">
              <time datetime="2024-01-01">{blog.date}</time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
