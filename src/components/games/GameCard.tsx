import type { Game } from '@/types/games';
import { Card, HStack, Heading, Image } from '@chakra-ui/react';
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
            <PlatformIconList
              platforms={game.platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameCard;
