import React from 'react';
import {
  Box,
  Paper,
  Container,
  Button,
  Typography,
} from '@material-ui/core';
import { gql } from 'apollo-boost';
import client from '../apollo/client';
import Posts from '../components/Posts';

const handleClick = () => {
  console.log('Hola!!');
};

const Home = () => {
  client
    .query({
      query: gql`
          {
              users {
                  id
                  name
                  email
              }
          }
      `,
    })
    .then(result => console.log(result));

  return (
    <Container spacing={2}>
      <Paper>
        <Box m={3}>
          <h1>Anto!!</h1>
          {/* <Button variant="contained" color="primary" onClick={handleClick}>
            Button
          </Button> */}
        </Box>
      </Paper>
      <Posts />
    </Container>
  );
};

export default Home;
