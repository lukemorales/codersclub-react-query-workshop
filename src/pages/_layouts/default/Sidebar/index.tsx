import { useEffect, useState, useCallback } from 'react';

import { useHistory } from 'react-router';

import { api } from '@services';
import { TopAiringAnime, TopAiringResponse } from '@common/types/api';
import { AnimeCard } from '@components';

import * as S from './styles';
import SidebarLoading from './Loading';

const INITIAL_STATE = {
  favorite: [] as TopAiringAnime[],
  popularMovies: [] as TopAiringAnime[],
};

const Sidebar = () => {
  const history = useHistory();

  const [data, setData] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true);

  const navigateToCategories = useCallback(
    (category: string) => () => history.push(`/categories/${category}`),
    [history],
  );

  const updateState = useCallback(
    (newState: Partial<typeof INITIAL_STATE>) =>
      setData((prevState) => ({
        ...prevState,
        ...newState,
      })),
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const [favoriteResponse, popularMoviesResponse] = await Promise.all([
          api.get<TopAiringResponse>('/top/anime/1/favorite'),
          api.get<TopAiringResponse>('/top/anime/1/movie'),
        ]);

        updateState({
          favorite: favoriteResponse.data.top.sort(() => Math.random() - 0.5),
          popularMovies: popularMoviesResponse.data.top.sort(
            () => Math.random() - 0.5,
          ),
        });
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [updateState]);

  if (isLoading) {
    return <SidebarLoading navigateToCategories={navigateToCategories} />;
  }

  return (
    <S.Container>
      <S.StickyWrapper>
        <S.Section marginTop={0}>
          <h3>Popular Anime Movies</h3>

          {data.popularMovies.slice(0, 2).map((anime) => (
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

          {data.favorite.slice(0, 4).map((anime) => (
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
