import React from "react";
import PostRenderer from "../../componentsV2/containers/PostRenderer";
import { useSelector } from "react-redux";
import { useGetPosts } from "../../hooks";

const SingularPublication = () => {
  const { postsList } = useGetPosts("user");
  // if user not log, it wont display Interface
  const username = useSelector((state) => state.userInfo.username);
  return (
    <>{username !== "not logged" && <PostRenderer postsList={postsList} />}</>
  );
};

export default SingularPublication;
