import { Link } from 'react-router-dom';

import { TopAiringAnime, SeasonAnime } from '@common/types/api';

import * as S from './styles';

type ListItemProps = {
  data: TopAiringAnime | SeasonAnime;
  small?: boolean;
};

const ListItem = ({ data, small }: ListItemProps) => (
  <S.Container small={small}>
    <Link to={`/anime/${data.mal_id}`}>
      <img src={data.image_url} alt={data.title} />

      <span>{data.title}</span>
    </Link>
  </S.Container>
);

ListItem.defaultProps = {
  small: false,
};

export default ListItem;
