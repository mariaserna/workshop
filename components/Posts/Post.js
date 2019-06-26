import React from 'react';
import {
  Box,
  Paper,
  Container,
  Button,
  Typography,
} from '@material-ui/core';
import {
  Delete,
  Star,
} from '@material-ui/icons';

const Post = ({
    description,
    favorite,
    title,
    onClick,
}, index) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <Paper key={index}>
      <Box m={3}>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
        <p>{description}</p>
        <Button color="primary" onClick={handleClick}>
          Delete
          <Delete />
        </Button>
        <Box component="span">
          {favorite && <Star />}
        </Box>
      </Box>
    </Paper>
  );
};

export default Post;
