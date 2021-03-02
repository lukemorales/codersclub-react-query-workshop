import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;

    > svg + svg {
      margin-left: 4px;
    }
  `}
`;
