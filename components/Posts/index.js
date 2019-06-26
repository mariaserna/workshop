import { useState, useCallback } from 'react';
import POSTS from './Posts';
import Post from './Post';

const useDeleteArray = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const removeValue = useCallback((index) => {
    const newValues = [
      ...values,
    ];

    newValues.splice(index, 1);

    setValues(newValues);
  }, [values]);

  return [values, removeValue];
};

const Posts = () => {
  const [posts, removePost] = useDeleteArray(POSTS);

  return (
    posts
      .map(props => ({
        ...props,
        onClick: removePost,
      }))
      .map(Post)
  );
};

export default Posts;
