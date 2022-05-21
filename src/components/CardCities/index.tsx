import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

type CardCitiesProps = {
  src: string;
  countryTitle: string;
  countrySubtitle: string;
  countryIcon: string;
}

const CardCities: React.FC<CardCitiesProps> = ({ src, countryTitle, countrySubtitle, countryIcon }) => {
  return (
    <Box as='div' width='256px' height='279px' mb={['20px', '0']} background='light.900' marginRight={['0','50px']} border='1px solid #FFBA0850' >
      <Box display='flex' justifyContent='center' flexDirection='column' >
        <Image src={src} w='256px' h='173px' />
        <Flex justifyContent='space-between' p='15px'>
          <Box>
            <Text fontWeight='semibold' fontSize='20px' color='dark.800'>{countryTitle}</Text>
            <Text fontWeight='medium' fontSize='16px' color='dark.600'>{countrySubtitle}</Text>
          </Box>
          <Box backgroundImage={countryIcon} backgroundSize='cover' w='30px' h='30px' borderRadius='100%' ></Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default CardCities;