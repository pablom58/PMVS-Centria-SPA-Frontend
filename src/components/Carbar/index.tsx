import React , { useState , useEffect } from 'react'
import { connect } from 'react-redux' 

import { ProductInterface } from '../../store/interfaces'

import {
    Carbar as CarbarContainer,
    CarLink
} from './styles'

interface PropTypes {
    products: ProductInterface[]
}

const Carbar = (props: PropTypes) => {

    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(() => {
        if(props.products.length){
            const reducer = (accumulator : number, currentValue : number) => accumulator + currentValue;

            setTotalPrice(props.products.map((product:ProductInterface) => product.amount * product.price).reduce(reducer))
        }else{
            setTotalPrice(0)
        }
    },[props.products])

    return (
        <CarbarContainer>
            <CarLink to='/car'>{`${totalPrice}$`}</CarLink>
            <i className='pi pi-shopping-cart' />
        </CarbarContainer>
    )
}

const mapState = (state : any) => ({
    products: state.Car.products
})

export default connect(mapState,{})(Carbar)