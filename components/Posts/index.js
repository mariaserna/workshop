import React, { useState, useCallback, useEffect } from 'react';
import Post from './Post';
import useQuery from '../hooks/useQuery';
import postsQuery from '../graphql/postsQuery';
import Loading from '../Loading';

const useDeleteArray = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const removeValue = useCallback((index) => {
    const newValues = [
      ...values,
    ];

    newValues.splice(index, 1);

    setValues(newValues);
  }, [values]);

  useEffect(() => {
    setValues(initialValue);
  }, [initialValue]);

  return [values, removeValue];
};

const Posts = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(postsQuery);
  const [posts, removePost] = useDeleteArray(data.posts);

  if (error) {
    return null;
  }

  return (
    loading
      ? <Loading />
      : posts
        .map(props => ({
          ...props,
          onClick: removePost,
        }))
        .map(Post)
  );
};

export default Posts;
