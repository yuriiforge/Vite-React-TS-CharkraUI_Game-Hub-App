import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './games/SearchInput';

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        _hover={{
          transform: 'scale(1.1)',
          transition: 'transform 0.2s',
          cursor: 'pointer',
        }}
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
