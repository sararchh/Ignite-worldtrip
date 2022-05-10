import React from 'react';

import { Image, Stack } from '@chakra-ui/react';

const Header: React.FC = () => {


  return (
    <Stack w='100%' h={['50px', '100px']} alignItems='center' justifyContent='center' >
      <Image src='/assets/Logo.png' alt='logo' w={['81px', '184.06px']} h={['20px', '45.92px']} />
    </Stack>
  );
}

export default Header;