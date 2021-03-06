import { generateArray } from '@utils';
import AnimeCardLoading from '@components/AnimeCard/Loading';

import * as S from '../styles';

type SidebarLoadingProps = {
  navigateToCategories: (path: string) => () => void;
};

const SidebarLoading = ({ navigateToCategories }: SidebarLoadingProps) => (
  <S.Container>
    <S.StickyWrapper>
      <S.Section marginTop={0}>
        <h3>Popular Anime Movies</h3>

        {generateArray(2).map((position) => (
          <AnimeCardLoading key={position} />
        ))}

        <S.SeeMoreButton
          type="button"
          onClick={navigateToCategories('top/movie')}
        >
          See More
        </S.SeeMoreButton>
      </S.Section>

      <S.Section>
        <h3>Favorite Animes</h3>

        {generateArray(4).map((position) => (
          <AnimeCardLoading key={position} />
        ))}

        <S.SeeMoreButton
          type="button"
          onClick={navigateToCategories('top/favorite')}
        >
          See More
        </S.SeeMoreButton>
      </S.Section>
    </S.StickyWrapper>
  </S.Container>
);

export default SidebarLoading;
