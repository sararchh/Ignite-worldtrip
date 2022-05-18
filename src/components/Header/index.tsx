import React, { useEffect } from 'react';

import { Flex, HStack, Icon, Image, Stack } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons'

import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const { asPath } = useRouter()

  return (
    <HStack w='100vw' h={['50px', '100px']} alignItems='center' justifyContent='center' >

      <Flex w='30%' p='80px' >
        {asPath != '/' && <Icon as={ChevronLeftIcon} w={8} h={8} color='dark.800' onClick={() => router.push('/')} cursor='pointer' />}
      </Flex>

      <Flex w='40%' alignItems='center' justifyContent='center' >
        <Image src='/assets/Logo.png' alt='logo' w={['81px', '184.06px']} h={['20px', '45.92px']} />
      </Flex>

      <Flex w='30%'>

      </Flex>

    </HStack>
  );
}

export default Header;