import React from 'react';
import {
  Box,
  Paper,
  Container,
} from '@material-ui/core';
import Posts from '../components/Posts';

// const handleClick = () => {
//   console.log('Hola!!');
// };

const Home = () => (
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


export default Home;
