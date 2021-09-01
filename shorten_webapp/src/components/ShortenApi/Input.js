import React from 'react'
import styled from 'styled-components'
import { Box } from '../TopBody'
import { space, color, borderRadius } from 'styled-system'
import { Button } from '../Navbar'


const Inp = styled.input`
width: 70%;
height: 30px;
${space}
border: 1px solid red;
`


const Input = () => {
    return (
        <>
            <Box >
                <Inp type="text" placeholder="Shorten a link here.." />
                <Button color="white" bg="Cyan" >Shorten it!</Button>
            </Box>
        </>
    )
}

export default Input
