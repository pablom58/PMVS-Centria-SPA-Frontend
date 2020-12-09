import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../../components/Navbar'

import { Button } from 'primereact/button';

import { removeFromCar , emptyCar } from '../../store/actions/CarActions'

import CarTable from '../../components/CarTable'

import {
    CarContainer,
    Title,
    ButtonsContaienr,
    StyledLink
} from './styles'

const Car = (props : any) => {
    return (
        <>
            <Navbar />
            <CarContainer>
                <Title>Products In Car</Title>
                <ButtonsContaienr>
                    <Button label='Empty Car' onClick={() => props.emptyCar()} icon='pi pi-trash' />
                    <StyledLink to='/checkout' >
                        <Button label='Checkout' icon='pi pi-id-card' />
                    </StyledLink>
                </ButtonsContaienr>
                <CarTable />
            </CarContainer>
        </>
    )
}

const mapState = (state : any) => ({
    products: state.Car.products
})

const mapDispatch = {
    removeFromCar,
    emptyCar
}

export default connect(mapState,mapDispatch)(Car)