import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('Hola!!');
};

const Account = () => (
  <div>
    <h1>Account!!</h1>
    <Button variant="contained" color="primary" onClick={handleClick}>
      Anto!
    </Button>
  </div>
);

export default Account;
