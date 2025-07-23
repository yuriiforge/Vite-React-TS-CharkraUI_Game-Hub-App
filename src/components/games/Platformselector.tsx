import { usePlatform } from '@/hooks/usePlatform';
import { usePlatforms } from '@/hooks/usePlatforms';
import useGameQueryStore from '@/store';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { HiCog } from 'react-icons/hi';

const Platformselector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

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
                onClick={() => setSelectedPlatformId(platform.id)}
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
