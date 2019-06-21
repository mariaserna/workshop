import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('Hola!!');
};

const Home = () => (
  <div>
    <h1>Welcome!!</h1>
    <Button variant="contained" color="primary" onClick={handleClick}>
      Anto!
    </Button>
  </div>
);

export default Home;
