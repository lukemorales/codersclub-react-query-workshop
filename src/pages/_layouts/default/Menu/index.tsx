import { MENU_ENTRIES } from '@constants';

import * as S from './styles';

const Menu = () => (
  <S.Container>
    {MENU_ENTRIES.map(({ section, items }) => (
      <S.SectionWrapper key={section}>
        <strong>{section}</strong>

        <ul>
          {items.map(({ title, icon }) => (
            <S.MenuItem isActive={title === 'Home'} key={title}>
              <span>{icon}</span>
              {title}
            </S.MenuItem>
          ))}
        </ul>
      </S.SectionWrapper>
    ))}
  </S.Container>
);

export default Menu;
