import React from 'react';

import { Box, HStack, Image, Text } from '@chakra-ui/react';

const Banner: React.FC = () => {
  return (
    <HStack w='100%' h='335px' backgroundImage='url(/assets/Background.png)' backgroundSize='cover' px='90px' justify='space-between' >
      <Box as='div' w='524px' h='165px'>
        <Text as='h2' fontWeight='medium' fontSize='36'> 5 Continentes, infinitas possibilidades. </Text>
        <Text fontSize='20'>Chegou a hora de tirar do papel a viagem que você sempre sonhou.  </Text>
      </Box>
      <Box as='div'>
        <Image marginTop='176px' src='/assets/Airplane.png' />
      </Box>
    </HStack>
  )
}

export default Banner;