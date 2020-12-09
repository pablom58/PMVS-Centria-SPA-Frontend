import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Carbar = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;
`

export const CarLink = styled(Link)`
    font-size: 22px;
    color: #000;
    text-decoration: none;
    margin-left: 15px;
    margin-right: 15px;
`