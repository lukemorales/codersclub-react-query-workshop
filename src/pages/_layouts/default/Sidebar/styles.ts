import styled, { css } from 'styled-components';

export const Container = styled.nav`
  grid-area: sidebar;
  width: 100%;
  max-width: 400px;
  padding: 40px;
`;

export const SectionWrapper = styled.div`
  ${() => css`
    & + & {
      margin-top: 28px;
    }
  `}
`;

export const MenuItem = styled.li<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    font-weight: bold;
    color: ${theme.colors.text.bold};
    border-right: 3px solid
      ${isActive ? theme.colors.accent.primary : theme.colors.background};
  `}
`;
