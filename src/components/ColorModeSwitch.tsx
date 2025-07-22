import { HStack, Text } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';

const ColorModeSwitch = () => {
  return (
    <HStack borderRadius="full">
      <ColorModeButton marginStart="auto" padding={4} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
