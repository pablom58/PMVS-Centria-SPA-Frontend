import React , { useState } from 'react'

import Spinner from '../../components/Spinner'

import { useMutation } from '@apollo/client'
import { SIGNUP } from '../../api/signup'

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

    const [ signUp , { error , loading , data } ] = useMutation(SIGNUP)

    const handleChange = (input : any) => setState({ ...state, [input.target.name]: input.target.value })

    if(data){
        console.log(data)
    }

    const handleSubmit = () => {
        if(state.password === state.confirmPassword){
            signUp({
                variables: {
                    data: {
                        fullName: state.fullName,
                        username: state.username,
                        email: state.email,
                        password: state.password,
                    }
                }
            })
        }
    }

    return(
        <>
            <Navbar />
            {
                loading && <Spinner />
            }
            <LoginContainer>
                <LoginForm>
                    <Title>Sign Up Form</Title>
                    <Label>Full Name</Label>
                    <StyledInput value={state.fullName} name='fullName' onChange={handleChange} />
                    <Label>Username</Label>
                    <StyledInput value={state.username} name='username' onChange={handleChange} />
                    <Label>Email</Label>
                    <StyledInput type='email' value={state.email} name='email' onChange={handleChange} />
                    <Label>Password</Label>
                    <StyledInput type='password' value={state.password} name='password' onChange={handleChange} />
                    <Label>Confirm Password</Label>
                    <StyledInput type='password' value={state.confirmPassword} name='confirmPassword' onChange={handleChange} />
                    <ButtonContainer>
                        <StyledButton label='Sign Up' onClick={handleSubmit} />
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