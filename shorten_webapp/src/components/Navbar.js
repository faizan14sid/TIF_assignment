import logo from '../images/logo.svg'
import styled from 'styled-components';
import { space, color } from 'styled-system';
import { Link, BrowserRouter } from 'react-router-dom';

const Nav = styled.ul`
   
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: space-between;
  ${space}
  ${color}

`
export const Body = styled.body`
${space}
${color}

`
const NavList = styled.li`
    float: left;
    list-style-type: none;
  
  a{
    display: block;
    color: grey;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    font-size: 16px;
  } 
`
export const Button = styled.button`
${space}
font-size: 14px;
border-radius: 25px;
border-style: none;
cursor: pointer;
${color}
`

export default function Navbar() {
    return (
        <BrowserRouter>
            <Nav m="10px" >
                <Body ml="100px">
                    <NavList><Link to="/"><a><img src={logo} alt="logo" height="25px" width="90px" /></a></Link></NavList>
                    <NavList><Link to="/features"><a>Features</a></Link></NavList>
                    <NavList><Link to="/pricing"><a>Pricing</a></Link></NavList>
                    <NavList><Link to="/resources"><a>Resources</a></Link></NavList>
                </Body>
                <Body mr="140px">
                    <NavList><Link to="/login"><a>Login</a></Link></NavList>
                    <NavList><Link to="/signup"><a><Button bg="Cyan" color="white" mt="-10px" p="6px 15px 6px 15px">Sign Up</Button></a></Link></NavList>
                </Body>
            </Nav>
        </BrowserRouter>
    )
}
