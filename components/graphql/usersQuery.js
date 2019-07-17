import { gql } from 'apollo-boost';

const usersQuery = gql`
    {
        users {
            id
            name
            email
            projects {
            id
            name
            }
        }
    }
`;

export default usersQuery;
