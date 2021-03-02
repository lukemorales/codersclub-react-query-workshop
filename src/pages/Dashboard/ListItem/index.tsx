import { useHistory } from 'react-router';

import { TopAiringAnime, SeasonAnime } from '@common/types/api';

import * as S from './styles';

type ListItemProps = {
  data: TopAiringAnime | SeasonAnime;
  small?: boolean;
};

const ListItem = ({ data, small }: ListItemProps) => {
  const history = useHistory();

  const navigateToAnime = () => history.push(`/anime/${data.mal_id}`);

  return (
    <S.Container small={small}>
      <button type="button" onClick={navigateToAnime}>
        <img src={data.image_url} alt={data.title} />

        <span>{data.title}</span>
      </button>
    </S.Container>
  );
};

ListItem.defaultProps = {
  small: false,
};

export default ListItem;
