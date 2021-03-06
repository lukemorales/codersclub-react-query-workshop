import { QueryFunctionContext, useQuery } from 'react-query';

import { AnimeResponse, ApiError } from '@common/types/api';
import { api } from '@services';

export const fetchAnime = async (ctx: QueryFunctionContext<string[]>) => {
  const [, animeId] = ctx.queryKey;

  const { data } = await api.get<AnimeResponse>(`/anime/${animeId}`);

  return data;
};

export const useAnimeQuery = (animeId: string) =>
  useQuery<AnimeResponse, ApiError>(['anime', animeId], fetchAnime, {
    staleTime: 1000 * 60 * 5,
  });
