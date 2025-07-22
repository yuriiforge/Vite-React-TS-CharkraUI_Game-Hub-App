import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    breakpoints: {
      base: '0px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',
    },
    tokens: {
      colors: {},
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: '#fbfbfb', _dark: '#252525' },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: '{colors.black}', _dark: '#e5e5e5' },
          },
        },
        aside: {
          DEFAULT: {
            value: {
              _light: '{colors.gray.100}',
              _dark: '#1a1a1a',
            },
          },
        },
        emphasis: {
          DEFAULT: {
            value: {
              _light: '{colors.gray.200}',
              _dark: '#111111',
            },
          },
        },
        cardBg: {
          DEFAULT: {
            value: {
              _light: '{colors.white}',
              _dark: '#2f2f2f',
            },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, config);
