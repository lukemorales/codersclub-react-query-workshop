import { useQueries, UseQueryOptions, UseQueryResult } from 'react-query';

import {
  SeasonAnime,
  SeasonResponse,
  TopAiringAnime,
  TopAiringResponse,
} from '@common/types/api';
import { api } from '@services';
import { ApiError } from '@common/types/api/error';

type DashboardQuery<T> = UseQueryResult<T, ApiError>;

const fetchSeason = async () => {
  const { data } = await api.get<SeasonResponse>('/season/2021/summer');

  return data.anime.filter((anime) => !anime.title.includes('Heion Sedai no '));
};

const fetchTopAiring = async () => {
  const { data } = await api.get<TopAiringResponse>('/top/anime/1/airing');

  return data.top;
};

export const queries: UseQueryOptions[] = [
  {
    queryKey: 'season',
    queryFn: fetchSeason,
  },
  {
    queryKey: 'top-airing',
    queryFn: fetchTopAiring,
  },
];

export const useDashboardQueries = () =>
  useQueries(queries) as [
    DashboardQuery<SeasonAnime[]>,
    DashboardQuery<TopAiringAnime[]>,
  ];
