import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
    {
        getProducts{
            _id
            name
            amount
            price
            description,
            imageUrl
        }
    }
`

export const GET_PRODUCT = gql`
    query GetProduct($id:String!){
        getProduct(_id:$id){
            _id
            name
            amount
            price
            description
            imageUrl
        }
    }
`

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($data:ProductInput!) {
        createProduct(data:$data){
            _id
            name
        }
    }
`