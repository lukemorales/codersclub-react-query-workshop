import styled, { css } from 'styled-components';

export const Container = styled.article`
  width: 100%;
  min-width: 100%;

  > h1 {
    text-transform: capitalize;
    margin-bottom: 40px;
  }
`;

export const AnimeGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;

  > li {
    margin-top: 0 !important;
  }
`;

export const Pagination = styled.div`
  ${({ theme }) => css`
    margin-top: 80px;
    display: flex;
    justify-content: center;

    > ul {
      display: flex;
      gap: 16px;

      > li {
        border-radius: 4px;
        color: ${theme.colors.text.highlight};
        background: ${theme.colors.text.secondary};

        a {
          width: 28px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &.active,
        :hover {
          color: ${theme.colors.accent.soft};
          background: ${theme.colors.accent.primary};
        }
      }
    }
  `}
`;
