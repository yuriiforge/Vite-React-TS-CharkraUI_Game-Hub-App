import { usePlatform } from '@/hooks/usePlatform';
import { usePlatforms } from '@/hooks/usePlatforms';
import type { Platform } from '@/types/games';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { HiCog } from 'react-icons/hi';

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatformId?: number;
}

const Platformselector = ({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data: platforms, error } = usePlatforms();

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface" size="lg">
          <HiCog /> {selectedPlatform?.name || 'Platforms'} ▼
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms?.results.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default Platformselector;
