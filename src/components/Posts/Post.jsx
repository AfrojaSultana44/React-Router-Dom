import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="border border-yellow-600 rounded-xl p-4">
      <p>PostId: {id}</p>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button className="border rounded-lg p-2 ml-2">Show Details</button>
      </Link>
      <button onClick={handleShowDetails} className="border rounded-lg p-2">
        Click to see details
      </button>
    </div>
  );
};

export default Post;
