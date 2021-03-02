import { useParams } from 'react-router-dom';

import * as S from './styles';

type RouteParams = {
  category: string;
  sub_category?: string;
};

const Categories = () => {
  const { category, sub_category } = useParams<RouteParams>();

  return (
    <S.Container>
      <h1>
        {category}/{sub_category}
      </h1>
    </S.Container>
  );
};

export default Categories;
