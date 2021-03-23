import React from "react";
import PostInterface from "../../componentsV2/containers/postInterface";
import { useGetPosts } from "../../hooks";

const MyPublications = () => {
  const { postsList } = useGetPosts("user");
  return (
    <>
      <PostInterface postsList={postsList} />
    </>
  );
};

export default MyPublications;
