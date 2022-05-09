import { Box, Center, Divider, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Banner from '../components/Banner';
import ContinentsSlide from '../components/ContinentsSlide';

import Header from '../components/Header';

const arrayTravelTypes = [
  { src: '/assets/cocktail.png', title: 'vida noturna' },
  { src: '/assets/surf.png', title: 'praia' },
  { src: '/assets/building.png', title: 'moderno' },
  { src: '/assets/museum.png', title: 'clássico' },
  { src: '/assets/earth.png', title: 'e mais...' },
];

const Home: NextPage = () => {


  return (
    <Box w='100vw' h='100%'>
      <Header />
      <Banner />

      <Flex as='div' w='100%' h='145px' my='140px' justifyContent='center'>
        <Grid templateColumns='repeat(5, 1fr)' gap={5} >
          {arrayTravelTypes.map((travel, key) =>
            <GridItem w='160px' justifyContent='center' alignItems='center' display='flex' flexDirection='column'>
              <Image w='85' h='85' src={travel.src} />
              <Text color='dark.800' fontWeight='semibold' mt='20px'>{travel.title}</Text>
            </GridItem>
          )}
        </Grid>
      </Flex>

      <Center height='50px'>
        <Divider orientation='horizontal' size='10px' w='90px' h='2px' bg='dark.800' />
      </Center>

      <Box as='div' display='flex' alignItems='center' justifyContent='center' my='40px' >
        <Text as='p' textAlign='center' color='dark.800' fontSize='36px' fontWeight='medium'>Vamos nessa? <br></br> Então escolha seu continente  </Text>
      </Box>

      <ContinentsSlide />
    </Box>
  )
}

export default Home
