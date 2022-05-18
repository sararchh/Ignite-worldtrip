import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Continents } from '../../services/continents'

import { Box, Flex, Grid, GridItem, Text, VStack } from '@chakra-ui/react';

import Header from '../../components/Header';
import CardInfo from '../../components/CardInfo';

const Continent: React.FC = () => {
  const router = useRouter();
  const [continentInfo, setContinentInfo] = useState<any>(null);

  useEffect(() => {
    const { query: { slug } } = router;
    // console.log('slug', slug);
    const continentFilter = Continents.find(i => i.slug == slug);
    setContinentInfo(continentFilter);
  }, [router.isReady])

  return (
    <VStack>
      <Header />

      <Flex backgroundImage={continentInfo?.src} w='100vw' h='500px' backgroundSize='cover' alignItems='end' px='100px' py='50px' >
        <Text fontSize='48' fontWeight='semibold'>{continentInfo?.title}</Text>
      </Flex>

      <Flex as='div' w='100%' display='flex' justify='center' >
        <Box as='div' w='45%'>
          <Text fontWeight='regular' color='dark.800' fontSize='24' textAlign='justify'>{continentInfo?.summary}</Text>
        </Box>

        <Box as='div' w='35%' alignItems='center' justifyContent='center' display='flex'  >
          <Grid templateColumns='repeat(3, 1fr)' gap={4} >
            <CardInfo titleInfo={continentInfo?.qtd_countries} textInfo={'países'} />
            <CardInfo titleInfo={continentInfo?.qtd_languages} textInfo={'línguas'} />
            <CardInfo titleInfo={continentInfo?.qtd_cities} textInfo={'cidades +100'} />
          </Grid>

        </Box>
      </Flex>

      <Text color='red'>{continentInfo?.countries?.map((country: any) => (
        <>
          {/* <p>{country.title}</p> */}
          {/* <Image src={country.thumb} /> */}
          {/* <Image src={country.icon} />   */}
        </>
      ))}</Text>


    </VStack>
  )
}

export default Continent;