import styled from 'styled-components'
import { InputText } from 'primereact/inputtext'

export const CreateProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
`

export const Title = styled.p`
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 25px;
`

export const FormContainer = styled.div`
    width: 400px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 20px;
    margin-bottom: 8px;
`

export const TextField = styled(InputText)`
    margin-bottom: 20px;
    width: 100%;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    & > button {
        width: 250px;
    }
`