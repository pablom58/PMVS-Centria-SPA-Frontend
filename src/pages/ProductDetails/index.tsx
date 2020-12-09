import React from 'react'
import { connect } from 'react-redux'

import { useQuery } from '@apollo/client'

import Navbar from '../../components/Navbar'
import Carbar from '../../components/Carbar'

import { GET_PRODUCT } from '../../api/products'

import { addToCar } from '../../store/actions/CarActions'
import { ProductInterface } from '../../store/interfaces'

import { Button } from 'primereact/button'

import {
    ProductDetailsContainer,
    Title,
    LeftSection,
    Image,
    RightSection,
    InfoHeadContainer,
    Subtitle,
    Info,
    ButtonContainer
} from './styles'

interface PropTypes {
    _id : string,
    name : string,
    amount : number,
    price : number,
    description : string,
    imageUrl: string,
    match? : any,
    addToCar: (product : ProductInterface) => void
}

const ProductDetails = (props : PropTypes) => {

    const { error, loading , data } = useQuery(GET_PRODUCT,{
        variables: {
            id: props.match.params.id
        }
    })

    const handleAddToCar = () => {

        if(data && data.getProduct){
            let product : ProductInterface = {
                _id: data.getProduct._id,
                amount: 1,
                name: data.getProduct.name,
                price: data.getProduct.price
            }
    
            props.addToCar(product)
        }
    }

    return (
        <>
            <Navbar />
            <Carbar />
            <ProductDetailsContainer>
                <Title>{ data && data.getProduct ? data.getProduct.name : '' }</Title>
                <LeftSection>
                    <Image src={ data && data.getProduct ? data.getProduct.imageUrl : '' } />
                </LeftSection>
                <RightSection>
                    <InfoHeadContainer>
                        <Subtitle>Available: { data && data.getProduct ? data.getProduct.amount : '' }</Subtitle>
                        <Subtitle>Price: { data && data.getProduct ? data.getProduct.price : '0' }$</Subtitle>
                    </InfoHeadContainer>
                    <Subtitle>Description: </Subtitle>
                    <br/>
                    <Info>{ data && data.getProduct ? data.getProduct.description : '' }</Info>
                </RightSection>
                <ButtonContainer>
                    <Button label='Add To Car' onClick={handleAddToCar} />
                </ButtonContainer>
            </ProductDetailsContainer>
        </>
    )
}

const mapDispatch = {
    addToCar
}

export default connect(null,mapDispatch)(ProductDetails)