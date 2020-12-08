import React from 'react'

import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

import { CardsContainer } from './styles'

const Home = () => {
    return (
        <>
            <Navbar />
            <CardsContainer>
                <Card/>
            </CardsContainer>
        </>
    )
}

export default Home