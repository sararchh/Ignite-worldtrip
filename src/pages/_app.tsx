import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { Global, css } from '@emotion/react';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Global styles={css`${GlobalStyles}`} /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
