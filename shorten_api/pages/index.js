import Image from 'next/image'
import slide1 from '../public/images/illustration-working.svg'
import styled from 'styled-components'
import { color, space, layout } from 'styled-system'
import { Button } from '../components/Navbar'
import bgShorten from '../public/images/bg-shorten-desktop.svg'

export const Box = styled.div`
display: flex;
justify-content: space-evenly;
${space}
${color}
`
export const Wraper = styled.section`
${space}
${color}

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


export default function Home() {
  return (
    <>
      <Box>
        <Wraper ml="210px">
          <Title color="VeryDarkViolet">More than just <br />
            shorter links</Title>
          <Para mt="-55px" color="GrayishViolet">
            Build your brand's recognition and get detailed <br />
            insights on how your links are performing.
          </Para>
          <Button bg="Cyan" color="white" p="8px 25px 8px 25px">Get Started</Button>
        </Wraper>
        <Wraper mr="100px" mt="20px">
          <Image src={slide1} height="350px" width="450px" />
        </Wraper>
      </Box >
      <Box bg="Gray">
        <Wraper bg="VeryDarkBlue">
          <Image src={bgShorten} width="950px" height="150px" />
        </Wraper>
      </Box>
    </>
  )
}
