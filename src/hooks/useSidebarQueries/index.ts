import { useQueries, UseQueryOptions, UseQueryResult } from 'react-query';

import { TopAiringAnime, TopAiringResponse } from '@common/types/api';
import { api } from '@services';
import { ApiError } from '@common/types/api/error';

const fetchTopMovies = async () => {
  const { data } = await api.get<TopAiringResponse>('/top/anime/1/movie');

  return data.top;
};

const fetchFavoriteAnimes = async () => {
  const { data } = await api.get<TopAiringResponse>('/top/anime/1/favorite');

  return data.top;
};

export const queries: UseQueryOptions[] = [
  {
    queryKey: ['top-movie', 1],
    queryFn: fetchTopMovies,
  },
  {
    queryKey: ['top-favorite', 1],
    queryFn: fetchFavoriteAnimes,
  },
];

export const useSidebarQueries = () =>
  useQueries(queries) as UseQueryResult<TopAiringAnime[], ApiError>[];
