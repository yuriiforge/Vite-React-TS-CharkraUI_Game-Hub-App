import { Button, Menu, Portal } from '@chakra-ui/react';

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by relevalce ▼
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>Relevance</Menu.Content>
          <Menu.Content>Date added</Menu.Content>
          <Menu.Content>Name</Menu.Content>
          <Menu.Content>Release date</Menu.Content>
          <Menu.Content>Popularity</Menu.Content>
          <Menu.Content>Averate rating</Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
