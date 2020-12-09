import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CarContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

export const Title = styled.p`
    font-size: 32px;
    margin-bottom: 40px;
    font-weight: bold;
    width: 100%;
    text-align: center;
`

export const ButtonsContaienr = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 25px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`