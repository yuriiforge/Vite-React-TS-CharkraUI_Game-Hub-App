import ExpandableText from '@/components/games/ExpandableText';
import GameAttributes from '@/components/games/GameAttributes';
import { useGame } from '@/hooks/useGame';
import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router';

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  if (!game) return null;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
