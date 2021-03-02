import styled, { css } from 'styled-components';

export const DefaultContainer = styled.div`
  ${() => css`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 220px auto 360px;
    grid-template-areas: 'menu content sidebar';
  `}
`;
