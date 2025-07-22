import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justify="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        _hover={{
          transform: 'scale(1.1)',
          transition: 'transform 0.2s',
          cursor: 'pointer',
        }}
      />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
