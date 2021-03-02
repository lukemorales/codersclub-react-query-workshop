import { TopAiringAnime } from '@common/types/api';
import { StarRating } from '@components';

import * as S from './styles';

type SidebarItemProps = {
  anime: TopAiringAnime;
};

const SidebarItem = ({ anime }: SidebarItemProps) => (
  <S.Container>
    <img src={anime.image_url} alt={anime.title} />

    <S.DataWrapper>
      <S.AnimeData>
        <div>
          <span>{anime.title}</span>
          <strong>{anime.score}</strong>
        </div>

        <strong>{anime.start_date}</strong>
      </S.AnimeData>

      <StarRating value={anime.score} />
    </S.DataWrapper>
  </S.Container>
);

export default SidebarItem;
