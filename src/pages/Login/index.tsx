import React , { useState } from 'react'

import Navbar from '../../components/Navbar'

import {
    LoginContainer,
    LoginForm,
    StyledInput,
    Title,
    Label,
    ButtonContainer,
    StyledButton,
    StyledLink
} from './styles'

const Login = () => {

    const [state,setState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (input : any) => setState({ ...state, [input.target.name]: input.target.value })

    return(
        <>
            <Navbar />
            <LoginContainer>
                <LoginForm>
                    <Title>Login Form</Title>
                    <Label>Username</Label>
                    <StyledInput value={state.username} name='username' onChange={handleChange} />
                    <Label>Password</Label>
                    <StyledInput type='password' value={state.password} name='password' onChange={handleChange} />
                    <ButtonContainer>
                        <StyledButton label='Sign In' />
                    </ButtonContainer>
                    <ButtonContainer>
                        <StyledLink to='/signup' >Sign Up</StyledLink>
                    </ButtonContainer>
                </LoginForm>
            </LoginContainer>
        </>
    )
}

export default Login