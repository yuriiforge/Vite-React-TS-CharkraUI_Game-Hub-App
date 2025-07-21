import { HStack, Text } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';

const ColorModeSwitch = () => {
  return (
    <HStack>
      <ColorModeButton marginStart="auto" padding={4} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
