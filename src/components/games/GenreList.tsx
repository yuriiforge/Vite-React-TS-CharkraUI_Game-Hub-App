import { useGenres } from '@/hooks/useGenres';
import type { Genre } from '@/types/genres';
import getCroppedImageUrl from '@/utils/image-url';
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
} from '@chakra-ui/react';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data: genres, isLoading, error } = useGenres();

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
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                variant="ghost"
                fontSize="large"
                onClick={() => onSelectGenre(genre)}
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
