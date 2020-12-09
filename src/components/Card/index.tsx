import React from 'react'
import { connect } from 'react-redux'

import { Button } from 'primereact/button'

import { addToCar } from '../../store/actions/CarActions'
import { ProductInterface } from '../../store/interfaces'
 
import {
    Image, 
    StyledCard,
    CardTitle,
    CardDescription,
    StyledLink
} from './styles'

interface PropTypes {
    _id : string,
    name : string,
    amount : number,
    price : number,
    description : string,
    imageUrl: string,
    addToCar: (product : ProductInterface) => void
}

const Card = (props:PropTypes) => {

    const handleAddToCar = () => {
        let data : ProductInterface = {
            _id: props._id,
            amount: 1,
            name: props.name,
            price: props.price
        }

        props.addToCar(data)
    }
    
    const header = <Image alt='Card' src={props.imageUrl} />
    const footer = <span>
                        <Button label='Add to Card' onClick={handleAddToCar} icon='pi pi-plus' style={{marginRight: '.25em'}} />
                        <StyledLink to={`/productDetails/${props._id}`} >
                            <Button label='Details' icon='pi pi-tablet' style={{marginRight: '.25em'}} className='p-button-secondary' />
                        </StyledLink>
                    </span>


    return (
        <StyledCard header={header} footer={footer} >
            <CardTitle>{props.name}</CardTitle>
            <CardTitle>{`${props.price}$`}</CardTitle>
            <CardDescription>
                {props.description}
            </CardDescription>
        </StyledCard>
    )
}

const mapDispatch = {
    addToCar
}

export default connect(null,mapDispatch)(Card)