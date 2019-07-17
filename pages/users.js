import React from 'react';
import {
  Button,
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
                  <div>
                    {user.projects.map(project => (
                      <>
                        <div>{project.name}</div>
                        <Button variant="contained" color="primary">Open Proyect</Button>
                      </>
                    ))}
                  </div>
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
