import React from 'react'

import { Button } from 'primereact/button'

import {
    Image, 
    StyledCard,
    CardTitle,
    CardDescription
} from './styles'

const Card = () => {
    
    const header = <Image alt='Card' src='https://vignette.wikia.nocookie.net/losperros/images/4/42/Beagle1.jpg/revision/latest?cb=20190325150935&path-prefix=es' />
    const footer = <span>
                        <Button label='Add to Card' icon='pi pi-add' style={{marginRight: '.25em'}} />
                        <Button label='Details' icon='pi pi-add' style={{marginRight: '.25em'}} className='p-button-secondary' />
                    </span>


    return (
        <StyledCard header={header} footer={footer} >
            <CardTitle>This is the title of the product</CardTitle>
            <CardDescription>
                This is the description
            </CardDescription>
        </StyledCard>
    )
}

export default Card