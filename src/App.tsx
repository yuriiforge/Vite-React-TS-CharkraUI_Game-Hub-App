import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/games/GameGrid';
import GenreList from './components/games/GenreList';
import { useState } from 'react';
import { type Genre } from './types/genres';
import Platformselector from './components/games/Platformselector';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  console.log(selectedGenre);

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
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area="main">
        <Platformselector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
