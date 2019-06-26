import { useState, useCallback } from 'react';
import POSTS from './Posts';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState(POSTS);

  const removePosts = useCallback((index) => {
    const newPosts = [
      ...posts,
    ];

    newPosts.splice(index, 1);

    setPosts(newPosts);
  }, [posts]);

  return (
    posts
      .map(props => ({
        ...props,
        onClick: removePosts,
      }))
      .map(Post)
  );
};

export default Posts;
