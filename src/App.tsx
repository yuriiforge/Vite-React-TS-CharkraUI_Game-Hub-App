import { Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/games/GameGrid';
import GenreList from './components/games/GenreList';
import Platformselector from './components/games/Platformselector';
import SortSelector from './components/games/SortSelector';
import GameHeading from './components/games/GameHeading';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1ft',
        lg: '250px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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

export default App;
