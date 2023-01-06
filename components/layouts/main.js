import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Router } from 'next/router'
import Navbar from '../navbar'

const Main = ({ children, _router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Leonardo Kepler - Portfólio</title>
      </Head>

      <Navbar path={Router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
