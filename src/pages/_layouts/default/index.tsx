import { PropsWithRequiredChildren } from '@common/types';

import Menu from './Menu';
import Sidebar from './Sidebar';
import * as S from './styles';

const DefaultLayout = ({ children }: PropsWithRequiredChildren) => (
  <S.DefaultContainer>
    <Menu />
    {children}
    <Sidebar />
  </S.DefaultContainer>
);

export default DefaultLayout;
