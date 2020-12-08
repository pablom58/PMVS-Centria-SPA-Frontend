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
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (input : any) => setState({ ...state, [input.target.name]: input.target.value })

    return(
        <>
            <Navbar />
            <LoginContainer>
                <LoginForm>
                    <Title>Sign Up Form</Title>
                    <Label>Full Name</Label>
                    <StyledInput value={state.fullName} name='fullname' onChange={handleChange} />
                    <Label>Username</Label>
                    <StyledInput value={state.username} name='username' onChange={handleChange} />
                    <Label>Email</Label>
                    <StyledInput type='email' value={state.email} name='email' onChange={handleChange} />
                    <Label>Password</Label>
                    <StyledInput type='password' value={state.password} name='password' onChange={handleChange} />
                    <Label>Confirm Password</Label>
                    <StyledInput type='password' value={state.confirmPassword} name='confirmPassword' onChange={handleChange} />
                    <ButtonContainer>
                        <StyledButton label='Sign Up' />
                    </ButtonContainer>
                    <ButtonContainer>
                        <StyledLink to='/login' >Sign In</StyledLink>
                    </ButtonContainer>
                </LoginForm>
            </LoginContainer>
        </>
    )
}

export default Login