import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
import useQuery from '../components/hooks/useQuery';
import usersQuery from '../components/graphql/usersQuery';
import Loading from '../components/Loading';


const Users = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(usersQuery);
  const { users } = data;

  if (error) {
    return null;
  }
  return (
    <Container maxWidth="sm">
      { loading
        ? <Loading />
        : users.map(user => (
          <Card>
            <CardContent>
              <Typography variant="h4">{user.name}</Typography>
              <div>{`<${user.email}>`}</div>
              { !!user.projects.length && (
                <>
                  <Typography variant="h5">Projects</Typography>
                  <div>{user.projects.map(project => (<div>{project.name}</div>))}</div>
                </>
              )}
            </CardContent>
          </Card>
        ))
      }
    </Container>
  );
};

export default Users;


// import React from 'react';
// import {
//   Box,
//   Paper,
//   Container,
// } from '@material-ui/core';
// import Posts from '../components/Posts';

// // const handleClick = () => {
// //   console.log('Hola!!');
// // };

// const Home = () => (
//   <Container spacing={2}>
//     <Paper>
//       <Box m={3}>
//         <h1>Anto!!</h1>
//         {/* <Button variant="contained" color="primary" onClick={handleClick}>
//           Button
//         </Button> */}
//       </Box>
//     </Paper>
//     <Posts />
//   </Container>
// );


// export default Home;
