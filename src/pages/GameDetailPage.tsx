import ExpandableText from '@/components/gameDetails/ExpandableText';
import GameAttributes from '@/components/gameDetails/GameAttributes';
import GameScreenshots from '@/components/gameDetails/GameScreenshots';
import GameTrailer from '@/components/gameDetails/GameTrailer';
import { useGame } from '@/hooks/useGame';
import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router';

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  if (!game) return null;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      gap={4}
    >
      <GridItem>
        <Heading fontSize="5xl" marginBottom={4}>
          {game?.name}
        </Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
