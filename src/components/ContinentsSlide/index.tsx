import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";


import { Box, Flex } from '@chakra-ui/react';

const arrayContinents = [
  { src: '/assets/Continents/americadonorte.jpeg', title: 'América do Norte' },
  { src: '/assets/Continents/americadosul.jpeg', title: 'América do Sul' },
  { src: '/assets/Continents/africa.jpeg', title: 'África' },
  { src: '/assets/Continents/asia.jpeg', title: 'Ásia' },
  { src: '/assets/Continents/europa.jpeg', title: 'Europa' },
];

const ContinentsSlide: React.FC = () => {
  return (
    <Flex as='div' w='100vw' h='450px' alignItems='center' justifyContent='center' background='blue'>
      <Swiper navigation={true} modules={[Navigation]} loop >
        {arrayContinents.map((index, key) =>
          <SwiperSlide>
            <Box key={key} backgroundImage={index.src} backgroundSize='cover' w='1240px' h='450px'>
              {index.title}
            </Box>
          </SwiperSlide>
        )}
      </Swiper>


    </Flex>
  );
}

export default ContinentsSlide;