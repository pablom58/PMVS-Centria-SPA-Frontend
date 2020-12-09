import React from 'react'
import { useQuery } from '@apollo/client'

import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Carbar from '../../components/Carbar'

import { GET_PRODUCTS } from '../../api/products'

import { CardsContainer } from './styles'

interface Product {
    _id : string,
    name : string,
    amount : number,
    price : number,
    description : string,
    imageUrl: string,
}

const Home = () => {

    const { error, loading , data } = useQuery(GET_PRODUCTS)

    return (
        <>
            <Navbar />
            <Carbar />
            <CardsContainer>
                {
                    data && data.getProducts && data.getProducts.map((product : Product) => <Card key={product._id} {...product} />)
                }
            </CardsContainer>
        </>
    )
}

export default Home