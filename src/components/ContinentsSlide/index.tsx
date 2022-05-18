import React from 'react';
import { useRouter } from 'next/router';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Box, Flex, Text } from '@chakra-ui/react';

import { Continents } from '../../services/continents'

const ContinentsSlide: React.FC = () => {
  const router = useRouter();

  return (
    <Flex as='div' w='100vw' h={['auto', '500px']} px={['0px', '150px']} py={['0px', '20px']} cursor='pointer'>
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
        {Continents.map((index, key) =>
          <SwiperSlide >
            <Flex
              key={key}
              backgroundImage={index.src}
              backgroundSize='cover'
              h={['250px', '450px']}
              // w='375px'
              alignItems='center'
              justifyContent='center'
              onClick={()=>router.push(`/continent/${index.slug}`)}
            >
              <Text fontWeight='bold' fontSize={['24px','48px']}>{index.title}</Text>
            </Flex>
          </SwiperSlide>
        )}
      </Swiper>


    </Flex>
  );
}

export default ContinentsSlide;