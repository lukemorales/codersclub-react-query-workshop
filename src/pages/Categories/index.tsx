import { useState } from 'react';

import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { AnimeCard } from '@components';
import { generateArray } from '@utils';
import AnimeCardLoading from '@components/AnimeCard/Loading';
import { usePaginatedCategoriesQuery } from '@hooks';

import * as S from './styles';

type RouteParams = {
  category: string;
  sub_category: string;
};

const Categories = () => {
  const { category, sub_category } = useParams<RouteParams>();

  const [currentPage, setCurrentPage] = useState(1);

  const categoryQuery = usePaginatedCategoriesQuery(
    category,
    sub_category,
    currentPage,
  );

  const handlePageNavigation = (page: { selected: number }) =>
    setCurrentPage(page.selected + 1);

  return (
    <S.Container>
      <h1>
        {category} {sub_category}s
      </h1>

      <S.AnimeGrid>
        {categoryQuery.isLoading
          ? generateArray(8).map((position) => (
              <AnimeCardLoading key={position} />
            ))
          : categoryQuery.data?.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
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
