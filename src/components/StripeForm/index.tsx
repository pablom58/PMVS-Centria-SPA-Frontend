import React , { Fragment } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { useMutation } from '@apollo/client'

import { MAKE_PAYMENT } from '../../api/payment'

import Spinner from '../../components/Spinner'

import { emptyCar } from '../../store/actions/CarActions'

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

import { ProductInterface } from '../../store/interfaces'

const StripeForm = (props:any) => {
    const stripe = useStripe()
    const elements = useElements()

    const [ makePayment , { error , loading , data } ] = useMutation(MAKE_PAYMENT)

    const history = useHistory()

    if(data && data.makeCharge){
        props.emptyCar()
        history.push('/')
    }

    const handleSubmit = () => {
        if(elements && stripe){
            let cardNumber : StripeCardNumberElement | null = elements.getElement(CardNumberElement)

            if(cardNumber){
                stripe.createToken(cardNumber)
                    .then(response => {
                        if(response.error){
                            console.error(response.error)
                        }else{

                            const reducer = (accumulator : number, currentValue : number) => accumulator + currentValue;

                            let total = props.products.map((product:ProductInterface) => product.amount * product.price).reduce(reducer)

                            makePayment({
                                variables: {
                                    amount: total,
                                    method: 'stripe',
                                    cardToken: response.token!.id
                                }
                            })
                        }
                    })
                    .catch(error => console.error(error))
            }
        }        
    }

    return (
        <Fragment>
            {
                loading && <Spinner />
            }
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
        </Fragment>
    )
}

const mapState = (state:any) => ({
    products: state.Car.products
})

const mapDispatch = {
    emptyCar
}

export default connect(mapState,mapDispatch)(StripeForm)