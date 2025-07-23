import { useGenres } from '@/hooks/useGenres';
import useGameQueryStore from '@/store';
import getCroppedImageUrl from '@/utils/image-url';
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
} from '@chakra-ui/react';

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="3xl" mb={4}>
        Genres
      </Heading>
      <List.Root>
        {genres?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px" listStyleType="none">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                variant="ghost"
                fontSize="large"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
