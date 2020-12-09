import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { useQuery } from '@apollo/client'
import { FIND_AUTHENTICATED_USER } from '../../api/user'
 
import {
   Navbar as Nav,
   StyledButton,
   NavSection,
   StyledLink
} from './styles'

const Navbar = () => {

    return (
        <div>
            <div className='card'>
                <Nav>
                     <NavSection>
                        <StyledLink to='/' >
                           PMVS Centria SPA    
                        </StyledLink>
                     </NavSection>
                     <NavSection>
                        <Link to='/login' >
                           <StyledButton label='Sign In' className='p-button-outlined' />    
                        </Link>
                     </NavSection>
               </Nav>
            </div>
        </div>
    )
}

export default Navbar