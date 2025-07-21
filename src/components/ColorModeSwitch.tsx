import { HStack, Text } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';

const ColorModeSwitch = () => {
  return (
    <HStack as="nav">
      <ColorModeButton marginStart="auto" />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
