import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

type CardInfoProps = {
  titleInfo: string,
  textInfo: string,
}

const CardInfo: React.FC<CardInfoProps> = ({ titleInfo, textInfo }) => {
  return (
    
      <GridItem w='98px' h='99px' alignItems='center' display='flex' flexDirection='column'>
        <Text fontWeight='bold' color='highlight.900' fontSize='40'>{titleInfo}  </Text>
        <Text fontWeight='bold' color='dark.800' fontSize='14'>{textInfo} </Text>
      </GridItem>

  );
}

export default CardInfo;