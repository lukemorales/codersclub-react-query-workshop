import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    grid-area: sidebar;
  `}
`;

export const StickyWrapper = styled.section`
  width: 100%;
  max-width: 360px;
  padding: 40px;
  position: sticky;
  top: 10px;
`;

export const Section = styled.article<{ marginTop?: number }>`
  ${({ marginTop = 24 }) => css`
    > h3 {
      margin: ${marginTop}px 0 16px;
    }
  `}
`;

export const SeeMoreButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 20px;
    font-size: 14px;
    color: ${theme.colors.accent.primary};
    background: ${theme.colors.accent.soft};
    border-radius: 8px;
  `}
`;
