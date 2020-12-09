import React from 'react'

import { ProgressSpinner } from 'primereact/progressspinner'

import { SpinnerContainer } from './styles'

const Spinner = () => {
    return (
        <SpinnerContainer>
            <ProgressSpinner />
        </SpinnerContainer>
    )
}

export default Spinner