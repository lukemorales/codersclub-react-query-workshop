import { useIsFetching } from 'react-query';
import RingLoader from 'react-spinners/RingLoader';
import { useTheme } from 'styled-components';

import * as S from './styles';

const FetchingIndicator = () => {
  const theme = useTheme();
  const isTopMoviesFetching = useIsFetching(['top-movie']);
  const isFavoriteAnimeFetching = useIsFetching(['top-favorite']);

  return (
    <S.Container>
      <RingLoader
        size={36}
        loading={!!isTopMoviesFetching || !!isFavoriteAnimeFetching}
        color={theme.colors.accent.primary}
      />
    </S.Container>
  );
};

export default FetchingIndicator;
