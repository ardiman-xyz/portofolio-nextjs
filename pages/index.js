import Head from 'next/head'
import Image from 'next/image'
import {Heading, Container, Text} from "@chakra-ui/react"

export default function Home() {
  return (
    <Container max="container.xl">
      <Head>
        <title>Aplikasi PPDB Online</title>
        <meta name="description" content="Aplikasi ppdb online kabaena" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Text color="green.500">hello selamat datang di PPDB online kabaena ardiman</Text>
      </main>
     
    </Container>
  )
}
