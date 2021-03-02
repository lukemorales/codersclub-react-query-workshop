import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    grid-area: sidebar;
    width: 100%;
    max-width: 400px;
    padding: 40px;
  `}
`;

export const PopularAnimes = styled.article`
  ${() => css`
    > h3 {
      margin: 24px 0 16px;
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
