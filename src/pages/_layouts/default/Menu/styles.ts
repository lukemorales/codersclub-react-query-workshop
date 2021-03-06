import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    grid-area: menu;
  `}
`;

export const StickyWrapper = styled.nav`
  width: 100%;
  max-width: 238px;
  padding: 40px 0 40px 40px;
  max-height: 98vh;
  position: sticky;
  top: 0;
`;

export const SectionWrapper = styled.div`
  ${() => css`
    margin-top: 40px;

    strong {
      display: block;
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 12px;
      letter-spacing: 2px;
    }
  `}
`;

export const MenuItem = styled.button<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    width: 100%;
    justify-content: flex-start;
    background: none;
    padding: 4px 0;
    font-weight: bold;
    margin-bottom: 12px;
    color: ${isActive ? theme.colors.accent.primary : theme.colors.text.bold};
    border-right: 4px solid
      ${isActive ? theme.colors.accent.primary : theme.colors.background};

    > svg {
      margin-right: 12px;
    }
  `}
`;
