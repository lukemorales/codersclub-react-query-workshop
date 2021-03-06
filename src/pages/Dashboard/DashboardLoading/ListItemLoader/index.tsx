import Skeleton from 'react-loading-skeleton';

import * as S from './styles';

type ListItemLoaderProps = {
  small?: boolean;
};

const ListItemLoader = ({ small }: ListItemLoaderProps) => (
  <S.Container small={small}>
    <div>
      <S.SkeletonLoader small={small} />

      <span>
        <Skeleton />
      </span>
    </div>
  </S.Container>
);

ListItemLoader.defaultProps = {
  small: false,
};

export default ListItemLoader;
