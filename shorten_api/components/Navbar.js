import Link from 'next/link';
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import styled from 'styled-components';
import { space, color } from 'styled-system';
import { Wraper } from '../pages';

const Nav = styled.ul`
   
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: space-around;
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
    padding: 20px;
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
        <>
            <Nav m="10px" >
                <Wraper ml="100px">
                    <NavList><Link href="/"><a><Image src={logo} alt="logo" height="25px" width="90px" /></a></Link></NavList>
                    <NavList><Link href="/features"><a>Features</a></Link></NavList>
                    <NavList><Link href="/pricing"><a>Pricing</a></Link></NavList>
                    <NavList><Link href="/resources"><a>Resources</a></Link></NavList>
                </Wraper>
                <Wraper mr="140px">
                    <NavList><Link href="/login"><a>Login</a></Link></NavList>
                    <NavList><Link href="/signup"><a><Button bg="Cyan" color="white" mt="-10px" p="6px 15px 6px 15px">Sign Up</Button></a></Link></NavList>
                </Wraper>
            </Nav>
        </>
    )
}
