import { QueryFunctionContext, useQuery } from 'react-query';

import { ApiError, TopAiringAnime, TopAiringResponse } from '@common/types/api';
import { api } from '@services';

const fetchCategory = async (ctx: QueryFunctionContext<string[]>) => {
  const [key, page] = ctx.queryKey;
  const [category, subCategory] = key.split('-');

  const { data } = await api.get<TopAiringResponse>(
    `/${category}/anime/${page}/${subCategory}`,
  );

  return data.top;
};

export const usePaginatedCategoriesQuery = (
  category: string,
  subCategory: string,
  page: number,
) =>
  useQuery<TopAiringAnime[], ApiError>(
    [`${category}-${subCategory}`, page],
    fetchCategory,
    {
      keepPreviousData: true,
    },
  );
