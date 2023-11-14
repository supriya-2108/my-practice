import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <Logo src="/Images/logo.png"/>
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}

const MainHeader= styled.header`
height: 5rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

`;

const Logo=styled.img`
height: 3rem
`
export default Header;
