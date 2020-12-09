import { gql } from '@apollo/client'

export const MAKE_PAYMENT = gql`
    mutation Charge($amount:Float!,$method:String!,$cardToken:String!){
        makeCharge(data:{
            amount:$amount,
            method:$method
        },cardToken:$cardToken){
            _id,
            url
        }
    }
`