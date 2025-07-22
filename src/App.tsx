import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/games/GameGrid';
import GenreList from './components/games/GenreList';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" hideBelow="lg">
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
