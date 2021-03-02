import { useState } from 'react';

import { useTheme } from 'styled-components';

import { MENU_ENTRIES } from '@constants';
import { ItemTitles } from '@constants/menu';
import { ThemeToggler } from '@components';

import * as S from './styles';

const Menu = () => {
  const theme = useTheme();

  const [currentSection, setCurrentSection] = useState<ItemTitles>('Home');

  const handleSectionChange = (section: ItemTitles) => () =>
    setCurrentSection(section);

  return (
    <S.Container>
      <ThemeToggler />

      {MENU_ENTRIES.map(({ section, items }) => (
        <S.SectionWrapper key={section}>
          <strong>{section}</strong>

          <ul>
            {items.map(({ title, icon: Icon }) => (
              <S.MenuItem
                key={title}
                onClick={handleSectionChange(title)}
                isActive={title === currentSection}
              >
                <Icon
                  size={20}
                  color={
                    title === currentSection
                      ? theme.colors.accent.primary
                      : theme.colors.text.bold
                  }
                />
                {title}
              </S.MenuItem>
            ))}
          </ul>
        </S.SectionWrapper>
      ))}
    </S.Container>
  );
};

export default Menu;
