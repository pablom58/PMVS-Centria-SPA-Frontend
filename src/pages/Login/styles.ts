import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { Card } from 'primereact/card' 
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    flex-wrap: wrap;
`

export const LoginForm = styled(Card)`
    width: 500px;
    height: 500px;
`

export const Title = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 32px;
`

export const Label = styled.p`
    font-size: 20px;
    margin-bottom: 15px;
`

export const StyledInput = styled(InputText)`
    width: 100%;
    margin-bottom: 25px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledButton = styled(Button)`
    width: 200px;
    margin-top: 25px;
    font-size: 18px;
`

export const StyledLink = styled(Link)`
    margin-top: 25px;
    text-align: center;
    font-size: 18px;
    text-decoration: none;
    color: #fff;
`