import React from 'react';

import { Box, HStack, Image, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

const Banner: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <HStack as='div' w='100%' h={['165px', '335px']} backgroundImage='url(/assets/Background.png)' backgroundSize='cover' px={['15px', '90px']} justify='space-between' >
      <VStack as='div' w='524px' h='165px' justifyContent='center'>
        <Text as='h2' fontWeight='medium' fontSize={['20px', '36px']}> 5 Continentes, infinitas possibilidades. </Text>
        <Text fontSize={['14px', '20px']}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.  </Text>
      </VStack>

      {isWideVersion && (
        <Box as='div'>
          <Image marginTop='176px' src='/assets/Airplane.png' />
        </Box>
      )}

    </HStack>
  )
}

export default Banner;