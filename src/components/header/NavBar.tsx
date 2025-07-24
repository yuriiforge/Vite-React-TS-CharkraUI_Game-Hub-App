import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { routes } from '@/routes';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={routes.base}>
        <Image
          src={logo}
          boxSize="60px"
          objectFit="cover"
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.2s',
            cursor: 'pointer',
          }}
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
