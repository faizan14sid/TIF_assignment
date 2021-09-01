import React from 'react'
import slide1 from '../images/illustration-working.svg'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { Button } from '../components/Navbar'
import bgShorten from '../images/bg-shorten-desktop.svg'
import Input from './ShortenApi/Input'

export const Box = styled.div`
display: flex;
justify-content: space-between;
${space}
${color}
`
const Wraper = styled.section`
${space}
${color}
z-index: +1;
position: relative;
top: -70px;

`
const Title = styled.h1`
font-size: 70px;
font-weight: 700;
${color}
`
const Para = styled.p`
${space}
font-size: 18px;
${color}
word-spacing: 5px;
letter-spacing: 1px;
`


const TopBody = () => {
    return (
        <>
            <Box>
                <Wraper ml="160px">
                    <Title color="VeryDarkViolet">More than just <br />
                        shorter links</Title>
                    <Para mt="-55px" color="GrayishViolet" >
                        Build your brand's recognition and get detailed <br />
                        insights on how your links are performing.
                    </Para>
                    <Button bg="Cyan" color="white" p="10px 25px 10px 25px" mt="20px">Get Started</Button>
                </Wraper>
                <Wraper mt="20px">
                    <img src={slide1} height="420px" width="620px" />
                </Wraper>
            </Box >
            <Box bg="Gray" mt="50px" >
                <Wraper bg="VeryDarkBlue" ml="150px">
                    <img src={bgShorten} width="1200px" height="150px" />
                    <Input />
                </Wraper>
            </Box>


        </>
    )
}

export default TopBody
