import { HiStar } from 'react-icons/hi';
import { useTheme } from 'styled-components';

import * as S from './styles';

type StarRatingProps = {
  value: number;
};

const starsArray = [1, 2, 3, 4, 5];

const StarRating = ({ value }: StarRatingProps) => {
  const theme = useTheme();

  const percentage = Math.floor((value / 10) * 5);

  return (
    <S.Container>
      {starsArray.map((position) => (
        <HiStar
          key={position}
          size={28}
          color={theme.colors.stars[percentage >= position ? 'fill' : 'empty']}
        />
      ))}
    </S.Container>
  );
};

export default StarRating;
