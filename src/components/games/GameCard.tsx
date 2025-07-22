import type { Game } from '@/types/games';
import { AspectRatio, Card, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/utils/image-url';
import GameCardContainer from './GameCardContainer';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <GameCardContainer>
      <Card.Root bg="cardBg" boxShadow="md">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            objectFit="cover"
            borderTopRadius="lg"
          />
        </AspectRatio>
        <Card.Body>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic || '?'} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameCard;
