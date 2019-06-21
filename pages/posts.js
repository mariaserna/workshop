import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('Hola posts!!');
};

const Posts = () => (
  <div>
    <h1>Posts!!</h1>
    <Button variant="contained" color="primary" onClick={handleClick}>
      Anto!
    </Button>
  </div>
);

export default Posts;
