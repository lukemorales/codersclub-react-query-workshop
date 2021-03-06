import styled, { css } from 'styled-components';

export const DefaultContainer = styled.div`
  ${() => css`
    width: 100%;
    height: 1000px;
    display: grid;
    position: relative;
    grid-template-columns: 220px auto 360px;
    grid-template-areas: 'menu content sidebar';
  `}
`;

export const ContentWrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    padding: 40px;
    grid-area: content;
    border-inline: 2px solid ${theme.colors.border};
  `}
`;
