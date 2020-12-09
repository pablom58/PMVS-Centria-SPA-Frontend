import { gql } from '@apollo/client'

export const FIND_AUTHENTICATED_USER = gql`
    {
        findAuthenticatedUser{
            _id
            fullName
        }
    }
`