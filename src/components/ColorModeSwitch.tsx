import { HStack, Text } from '@chakra-ui/react';
import { ColorModeButton, useColorMode } from './ui/color-mode';

const ColorModeSwitch = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack borderRadius="full">
      <ColorModeButton marginStart="auto" padding={4} />
      <Text whiteSpace="nowrap">
        {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
