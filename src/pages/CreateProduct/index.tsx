import React , { useState , Fragment } from 'react'

import Navbar from '../../components/Navbar'

import { Button } from 'primereact/button'

import { useMutation } from '@apollo/client'
import { CREATE_PRODUCT } from '../../api/products'

import {
    CreateProductContainer,
    Title,
    FormContainer,
    Label,
    TextField,
    ButtonContainer
} from './styles'

const CreateProduct = () => {

    const [ createProduct , { error , loading , data } ] = useMutation(CREATE_PRODUCT)

    const [state,setState] = useState({
        name: '',
        price: '',
        amount: '',
        description: '',
        imageUrl: ''
    })

    const inputs = [
        {
            name: 'name',
            value: state.name,
            label: 'Product Name'
        },
        {
            name: 'price',
            value: state.price,
            label: 'Price'
        },
        {
            name: 'amount',
            value: state.amount,
            label: 'Available Amount'
        },
        {
            name: 'description',
            value: state.description,
            label: 'Description'
        },
        {
            name: 'imageUrl',
            value: state.imageUrl,
            label: 'Image Url'
        }
    ]

    const handleChange = (input:any) => {
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }

    const handleSubmit = () => {
        createProduct({
            variables: {
                data: {
                    name: state.name,
                    price: parseFloat(state.price),
                    amount: parseInt(state.amount),
                    description: state.description,
                    imageUrl: state.imageUrl
                }
            }
        })
    }

    return (
        <>
            <Navbar />
            <CreateProductContainer>
                <Title>Create Product</Title>
                <FormContainer>
                    {
                        inputs.map((input,index) => <Fragment key={`input${index}`} > 
                                                <Label>{input.label}</Label>
                                                <TextField value={input.value} onChange={handleChange} name={input.name} />
                                            </Fragment>)
                    }
                </FormContainer>
                <ButtonContainer>
                    <Button label='Create Product' onClick={handleSubmit} />
                </ButtonContainer>
            </CreateProductContainer>
        </>
    )
}

export default CreateProduct