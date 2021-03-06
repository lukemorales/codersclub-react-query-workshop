import { useCallback } from 'react';

import { useHistory } from 'react-router';

import { AnimeCard } from '@components';
import { useSidebarQueries } from '@hooks';

import * as S from './styles';
import SidebarLoading from './Loading';

const Sidebar = () => {
  const history = useHistory();

  const [topMoviesQuery, favoriteAnimeQuery] = useSidebarQueries();

  const navigateToCategories = useCallback(
    (category: string) => () => history.push(`/categories/${category}`),
    [history],
  );

  if (topMoviesQuery.isLoading || favoriteAnimeQuery.isLoading) {
    return <SidebarLoading navigateToCategories={navigateToCategories} />;
  }

  return (
    <S.Container>
      <S.StickyWrapper>
        <S.Section marginTop={0}>
          <h3>Popular Anime Movies</h3>

          {topMoviesQuery.data?.slice(0, 2).map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
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

          {favoriteAnimeQuery.data?.slice(0, 4).map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
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
};

export default Sidebar;
