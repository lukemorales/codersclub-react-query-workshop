import { useEffect, useState, useCallback } from 'react';

import { useHistory } from 'react-router';

import { api } from '@services';
import { TopAiringAnime, TopAiringResponse } from '@common/types/api';

import * as S from './styles';
import SidebarItem from './SidebarItem';

const INITIAL_STATE = {
  favorite: [] as TopAiringAnime[],
  popularMovies: [] as TopAiringAnime[],
};

const Sidebar = () => {
  const history = useHistory();

  const [data, setData] = useState(INITIAL_STATE);

  const navigateToCategories = (category: string) => () =>
    history.push(`/categories/${category}`);

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
      }
    })();
  }, [updateState]);

  return (
    <S.Container>
      <S.PopularAnimes>
        <h3>Popular Anime Movies</h3>

        {data.popularMovies.slice(0, 2).map((anime) => (
          <SidebarItem key={anime.mal_id} anime={anime} />
        ))}

        <S.SeeMoreButton
          type="button"
          onClick={navigateToCategories('top/movie')}
        >
          See More
        </S.SeeMoreButton>
      </S.PopularAnimes>
      <S.PopularAnimes>
        <h3>Favorite Animes</h3>

        {data.favorite.slice(0, 4).map((anime) => (
          <SidebarItem key={anime.mal_id} anime={anime} />
        ))}

        <S.SeeMoreButton
          type="button"
          onClick={navigateToCategories('top/favorite')}
        >
          See More
        </S.SeeMoreButton>
      </S.PopularAnimes>
    </S.Container>
  );
};

export default Sidebar;
