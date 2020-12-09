import React , { useState } from 'react'
import { useLazyQuery , gql } from '@apollo/client'

import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'

import { LOGIN } from '../../api/login'
import { AuthLogin } from '../../api/types'

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

function SubmitLogin(loginData : AuthLogin){
    
}

const Login = () => {

    const [state,setState] = useState({
        username: '',
        password: ''
    })

    const [login , { error , loading , data }] = useLazyQuery(LOGIN,{
        variables: {
            data: {
                username: state.username,
                password: state.password
            }
        }
    })

    const handleChange = (input : any) => setState({ ...state, [input.target.name]: input.target.value })

    if(data && data.login){
        localStorage.setItem('access_token',data.login)
    }

    return(
        <>
            <Navbar />
            {
                loading && <Spinner />
            }
            <LoginContainer>
                <LoginForm>
                    <Title>Login Form</Title>
                    <Label>Username</Label>
                    <StyledInput value={state.username} name='username' onChange={handleChange} />
                    <Label>Password</Label>
                    <StyledInput type='password' value={state.password} name='password' onChange={handleChange} />
                    <ButtonContainer>
                        <StyledButton label='Sign In' onClick={() => login()} />
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