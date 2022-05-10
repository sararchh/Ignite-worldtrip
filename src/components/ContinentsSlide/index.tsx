import React from 'react';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Box, Flex, Text } from '@chakra-ui/react';

const arrayContinents = [
  { src: '/assets/Continents/americadonorte.jpeg', title: 'América do Norte' },
  { src: '/assets/Continents/americadosul.jpeg', title: 'América do Sul' },
  { src: '/assets/Continents/africa.jpeg', title: 'África' },
  { src: '/assets/Continents/asia.jpeg', title: 'Ásia' },
  { src: '/assets/Continents/europa.jpeg', title: 'Europa' },
];

const ContinentsSlide: React.FC = () => {
  return (
    <Flex as='div' w='100vw' h='500px' px='150px' py='20px'>
      <Swiper 
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          loop
      >
        {arrayContinents.map((index, key) =>
          <SwiperSlide>
            <Flex key={key} backgroundImage={index.src}  backgroundSize='cover'  h='450px' alignItems='center' justifyContent='center'>
              <Text fontWeight='bold' fontSize='48px'>{index.title}</Text>
            </Flex>
          </SwiperSlide>
        )}
      </Swiper>


    </Flex>
  );
}

export default ContinentsSlide;