import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { TopAiringAnime, TopAiringResponse } from '@common/types/api';
import { api } from '@services';
import { AnimeCard } from '@components';
import { generateArray } from '@utils';
import AnimeCardLoading from '@components/AnimeCard/Loading';

import * as S from './styles';

type RouteParams = {
  category: string;
  sub_category: string;
};

const Categories = () => {
  const { category, sub_category } = useParams<RouteParams>();

  const [data, setData] = useState([] as TopAiringAnime[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageNavigation = (page: { selected: number }) =>
    setCurrentPage(page.selected);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await api.get<TopAiringResponse>(
          `/${category}/anime/${currentPage}/${sub_category}`,
        );

        setData(response.data.top);
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [category, currentPage, sub_category]);

  return (
    <S.Container>
      <h1>
        {category} {sub_category}s
      </h1>

      <S.AnimeGrid>
        {isLoading
          ? generateArray(8).map((position) => (
              <AnimeCardLoading key={position} />
            ))
          : data.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)}
      </S.AnimeGrid>

      <S.Pagination>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          pageCount={10}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          activeClassName="active"
          onPageChange={handlePageNavigation}
        />
      </S.Pagination>
    </S.Container>
  );
};

export default Categories;
