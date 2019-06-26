import React from 'react';
import Button from '@material-ui/core/Button';
import client from '../apollo/client';
import { gql } from "apollo-boost";

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
    <div>
      <h1>Welcome!!</h1>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Anto!
      </Button>
    </div>
  );
};

export default Home;
