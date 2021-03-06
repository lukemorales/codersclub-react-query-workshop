import Skeleton from 'react-loading-skeleton';

import * as S from './styles';

const AnimeCardLoading = () => (
  <S.Container>
    <Skeleton width={64} height={92} style={{ marginRight: 16 }} />

    <S.DataWrapper>
      <S.AnimeData>
        <div>
          <span>
            <Skeleton width={128} />
          </span>
          <strong>
            <Skeleton width={32} />
          </strong>
        </div>

        <strong>
          <Skeleton width={64} />
        </strong>
      </S.AnimeData>

      <Skeleton width={30 * 5} height={28} style={{ marginTop: 24 }} />
    </S.DataWrapper>
  </S.Container>
);

export default AnimeCardLoading;
