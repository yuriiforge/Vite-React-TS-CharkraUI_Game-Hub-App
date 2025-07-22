import { Badge } from '@chakra-ui/react';

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '?';
  return (
    <Badge
      fontSize="large"
      borderRadius="4px"
      paddingX={2}
      paddingY={1}
      colorPalette={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
