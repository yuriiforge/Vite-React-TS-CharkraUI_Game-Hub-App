import type { Game } from '@/types/games';
import { Card, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/image-url';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root
      borderRadius={10}
      overflow="hidden"
      bg="cardBg"
      boxShadow="md"
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        objectFit="cover"
        width="100%"
        height="200px"
      />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
