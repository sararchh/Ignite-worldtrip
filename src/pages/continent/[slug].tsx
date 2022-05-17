import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Continents } from '../../services/continents'
import { AlertTitle, Flex, Text } from '@chakra-ui/react';
import Header from '../../components/Header';

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
    <Flex>
      <Header />
      <Text>{continentInfo?.title}</Text>
      <Text>{continentInfo?.countries?.map((country: any) => (
        <p>{country.title}</p>
      ))}</Text>
    </Flex>
  )
}

export default Continent;