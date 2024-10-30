import { key } from "localforage";
import React from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
