import { gql } from '@apollo/client'
 
export const LOGIN = gql`
    query Login($data: AuthInput!) {
        login(data: $data)
    }
`