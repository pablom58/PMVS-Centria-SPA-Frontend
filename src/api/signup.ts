import { gql } from '@apollo/client'

export const SIGNUP = gql`
    mutation SignUp($data:UserInput!){
        createUser(data:$data){
            fullName,
            _id
        }
    }
`