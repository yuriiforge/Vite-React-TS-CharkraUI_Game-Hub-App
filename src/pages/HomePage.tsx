import GameGrid from '@/components/games/GameGrid';
import GameHeading from '@/components/games/GameHeading';
import GenreList from '@/components/games/GenreList';
import Platformselector from '@/components/games/Platformselector';
import SortSelector from '@/components/games/SortSelector';
import { Grid, GridItem, HStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1ft',
        lg: '250px 1fr',
      }}
    >
      <GridItem area="aside" hideBelow="lg" paddingX={5}>
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameHeading />
        <HStack paddingLeft={3} gap={4} marginY={10}>
          <Platformselector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
