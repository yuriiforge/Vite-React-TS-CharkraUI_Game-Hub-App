import { useGenres } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/utils/image-url';
import { HStack, Image, List, Text } from '@chakra-ui/react';

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List.Root>
      {genres?.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" listStyleType="none">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
