import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: {
      "900": "#FFBA08",
      "50": "#FFBA0850",
    },

    dark: {
      "900": "#000000",
      "800": "#47585B",
      "600": "#999999",
      "50":  "#99999950",
    },

    light: {
      "900": "#FFFFFF",
      "800": "#F5F8FA",
      "600": "#DADADA",
    }
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: {
      body: {
        bg: 'light.600',
        color: 'light.800'
      }
    }
  }
});