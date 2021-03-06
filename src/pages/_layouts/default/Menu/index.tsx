import { useTheme } from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import { MENU_ENTRIES } from '@constants';
import { ThemeToggler } from '@components';

import * as S from './styles';

const Menu = () => {
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();

  const handleNavigation = (path = '/') => () => history.push(path);

  return (
    <S.Container>
      <S.StickyWrapper>
        <ThemeToggler />

        {MENU_ENTRIES.map(({ section, items }) => (
          <S.SectionWrapper key={section}>
            <strong>{section}</strong>

            <ul>
              {items.map(({ title, icon: Icon, pathname = '', pathRegex }) => {
                const isActive = !!pathRegex?.test(location.pathname);

                return (
                  <S.MenuItem
                    key={title}
                    onClick={handleNavigation(pathname)}
                    isActive={isActive}
                  >
                    <Icon
                      size={20}
                      color={
                        isActive
                          ? theme.colors.accent.primary
                          : theme.colors.text.bold
                      }
                    />
                    {title}
                  </S.MenuItem>
                );
              })}
            </ul>
          </S.SectionWrapper>
        ))}
      </S.StickyWrapper>
    </S.Container>
  );
};

export default Menu;
