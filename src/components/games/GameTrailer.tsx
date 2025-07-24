import { useTrailers } from '@/hooks/useTrailers';

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) return null;

  const trailer = data?.results?.[0];

  if (!trailer || !trailer.data?.[480]) return null;

  return <video src={trailer.data[480]} poster={trailer.preview} controls />;
};

export default GameTrailer;
