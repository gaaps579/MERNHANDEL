export const formatAllPosts = (rawPosts) => {
  return rawPosts.map((post) => {
    const { _id, content, file, userId } = post;
    return {
      _id,
      content,
      file,
      username: userId.username,
    };
  });
};

export const formatUserPosts = (rawPosts) => {
  return rawPosts.posts.map((post) => {
    const { _id, content, file } = post;
    return {
      _id,
      content,
      file,
      username: rawPosts.username,
    };
  });
};
