import React , { useState } from 'react'

import NavBar from '../../components/Navbar'

import {
    CheckoutContainer,
    Title,
    RadioButtonContainer,
    Label
} from './styles'

import { RadioButton } from 'primereact/radiobutton'

import StripeForm from '../../components/StripeForm'

const Checkout = () => {
    
    const [method,setMethod] = useState('stripe')

    return (
        <>
            <NavBar />
            <CheckoutContainer> 
                <Title>Checkout Form</Title>
                <RadioButtonContainer>
                    <div className='p-field-radiobutton' >
                        <RadioButton value='stripe' name='stripe' id='stripe' checked={method === 'stripe'} onChange={() => setMethod('stripe')} />
                        <Label htmlFor='stripe'>Stripe</Label>
                    </div>
                    <div className='p-field-radiobutton' >
                        <RadioButton value='paypal' name='paypal' id='paypal' checked={method === 'paypal'} onChange={() => setMethod('paypal')} />
                        <Label htmlFor='paypal'>Paypal</Label>
                    </div>
                </RadioButtonContainer>
                {
                    method === 'stripe' && <StripeForm />
                } 
            </CheckoutContainer>
        </>
    )
}

export default Checkout