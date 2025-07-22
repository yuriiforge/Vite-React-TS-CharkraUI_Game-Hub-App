import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import type { Platform } from '@/types/games';
import { HStack, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import type { PlatformCategory } from '@/types/platformCategory';
import { getPlatformCategory } from '@/utils/getPlatformCategory';

interface PlatformIconListProps {
  platforms: Platform[];
}

const PLATFORM_ICON_MAP: Record<PlatformCategory, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  apple: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  iphone: MdPhoneIphone,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const uniqueCategories = platforms.reduce((acc, platform) => {
    const category = getPlatformCategory(platform.slug);
    if (category && !acc.includes(category)) {
      acc.push(category);
    }
    return acc;
  }, [] as PlatformCategory[]);

  return (
    <HStack marginY="4px">
      {uniqueCategories.map((category) => {
        const IconComponent = PLATFORM_ICON_MAP[category];
        return (
          <Icon
            key={category}
            as={IconComponent}
            color="gray.500"
            boxSize="20px"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
