import React, { Children } from 'react'
import Header from '../components/Header'
import { Container } from '@chakra-ui/react'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW={"100vw"} py={"5"} px={"20"}>
        {children}
      </Container>
    </>
  )
}

export default MainLayout