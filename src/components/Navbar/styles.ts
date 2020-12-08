import styled from 'styled-components'
import { Button } from 'primereact/button'

import { Link } from 'react-router-dom'

export const Navbar = styled.nav`
    width: 100%;
    height: 80px;
    background: #343E4D;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const NavSection = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    &:first-child{
        justify-content: flex-start;
    }
    &:last-child{
        justify-content: flex-end;
    }
`

export const StyledButton = styled(Button)`
    height: 50px;
    margin-right: 20px;
`

export const StyledLink = styled(Link)`
    color: #fff;
    font-size: 25px;
    text-decoration: none;
`