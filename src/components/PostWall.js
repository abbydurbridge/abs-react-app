import React, { Component } from "react";
import Photo from "./Photo";

const PostWall = (props) => {
  const posts = props.posts;
  return (
    <div className="photo-grid">
      {posts.map((post, index) => (
        <Photo key={index} post={post} />
      ))}
    </div>
  );
};

export default PostWall;
