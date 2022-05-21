import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Continents } from '../../services/continents'

import { Box, Flex, Grid, Image, Text, VStack } from '@chakra-ui/react';

import Header from '../../components/Header';
import CardInfo from '../../components/CardInfo';
import CardCities from '../../components/CardCities';

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

      <Flex backgroundImage={continentInfo?.src} w='100vw' h={['150px', '500px']} backgroundSize='cover' alignItems='end' px={['60px', '100px']} py='50px' >
        <Text fontSize={['28', '48']} fontWeight='semibold'>{continentInfo?.title}</Text>
      </Flex>

      <Flex as='div' w='100%' display='flex' justify='center' py={['30px','80px']} flexDirection={['column', 'row']} >
        <Box as='div' w={['100%','45%']}>
          <Text fontWeight='regular' color='dark.800' fontSize={['14','24']} px={['20px','0']} textAlign='justify'>{continentInfo?.summary}</Text>
        </Box>

        <Box as='div' w={['100%','35%']} alignItems='center' justifyContent='center' display='flex' mt={['15px', '0']} >
          <Grid templateColumns='repeat(3, 1fr)' gap={4} >
            <CardInfo titleInfo={continentInfo?.qtd_countries} textInfo={'países'} />
            <CardInfo titleInfo={continentInfo?.qtd_languages} textInfo={'línguas'} />
            <CardInfo titleInfo={continentInfo?.qtd_cities} textInfo={'cidades +100'} />
          </Grid>

        </Box>
      </Flex>

      <VStack w='100%' display='flex' justify='center'>
        <Text w='80%' fontWeight='medium' fontSize={['24px','36px']} color='dark.800'>Cidades +100</Text>

        <Flex w='80%' align='center' flexDirection={['column', 'row']}>{continentInfo?.countries?.map((country: any) => (
          <CardCities
            src={country.thumb}
            countryTitle={country.title}
            countrySubtitle={country.subtitle}
            countryIcon={country.icon}
          />
        ))}</Flex>
      </VStack>

    </VStack>
  )
}

export default Continent;