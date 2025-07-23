import { useGames } from '@/hooks/useGames';
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

import type { GameQuery } from '@/App';
import React from 'react';

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding={4}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="40px">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? 'Loading ...' : 'Load more'}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
