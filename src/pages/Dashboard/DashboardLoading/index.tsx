import Skeleton from 'react-loading-skeleton';

import { generateArray } from '@utils';

import * as S from '../styles';
import ListItemLoader from './ListItemLoader';

const DashboardLoading = () => (
  <S.Container>
    <Skeleton width="100%" height={360} style={{ borderRadius: 32 }} />

    <S.SeasonHighlight>
      <h3>Season Highlights</h3>

      <ul>
        {generateArray(7).map((position) => (
          <ListItemLoader key={position} />
        ))}
      </ul>
    </S.SeasonHighlight>

    <S.TopAiring>
      <h3>Top Airing</h3>

      <ul>
        {generateArray(6).map((position) => (
          <ListItemLoader key={position} small />
        ))}
      </ul>
    </S.TopAiring>
  </S.Container>
);

export default DashboardLoading;
