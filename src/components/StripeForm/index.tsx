import React from 'react'

import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js'

import {
    StripeFormContainer,
    InputContainer,
    ButtonContainer,
    StyledButton
} from './styles'
import { StripeCardNumberElement } from '@stripe/stripe-js'

const StripeForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = () => {
        if(elements && stripe){
            let cardNumber : StripeCardNumberElement | null = elements.getElement(CardNumberElement)

            if(cardNumber){
                stripe.createToken(cardNumber)
                    .then(response => {
                        if(response.error){
                            console.error(response.error)
                        }else{
                            console.log(`cardToken ${response.token!.id}`)
                        }
                    })
                    .catch(error => console.error(error))
            }
        }        
    }

    return (
        <StripeFormContainer>
            <InputContainer>
                <CardNumberElement />
            </InputContainer>
            <InputContainer>
                <CardExpiryElement />
            </InputContainer>
            <InputContainer>
                <CardCvcElement />
            </InputContainer>
            <ButtonContainer>
                <StyledButton label='Pay Now' onClick={handleSubmit} />
            </ButtonContainer>
        </StripeFormContainer>
    )
}

export default StripeForm