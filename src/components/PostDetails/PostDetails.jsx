import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  console.log(postId);
  return (
    <div>
      <h2>Delails post about: {id}</h2>
      <h3>{title}</h3>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack} className="border rounded-lg p-2">
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
