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
      <List.Root bg="blackAlpha.400" rounded="md">
        {genres?.results.map((genre) => (
          <List.Item
            key={genre.id}
            paddingY="5px"
            listStyleType="none"
            onClick={() => setSelectedGenreId(genre.id)}
          >
            <HStack
              cursor="pointer"
              transition="all 0.2s"
              w="100%"
              maxW="100%"
              alignItems="flex-start"
              paddingLeft={2}
            >
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                flexShrink={0}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                bg={
                  genre.id === selectedGenreId
                    ? 'blackAlpha.600'
                    : 'transparent'
                }
                variant="ghost"
                fontSize="large"
                whiteSpace="normal"
                textAlign="left"
                wordBreak="break-word"
                overflow="hidden"
                textOverflow="ellipsis"
                _hover={{ bg: 'blackAlpha.400' }}
                w="calc(100% - 40px)"
                px={2}
                py={1}
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
