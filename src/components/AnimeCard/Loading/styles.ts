import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${() => css`
    display: flex;

    & + & {
      margin-top: 20px;
    }
  `}
`;

export const DataWrapper = styled.div`
  ${() => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  `}
`;

export const AnimeData = styled.div`
  ${() => css`
    > div {
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      > span {
        display: block;
        width: 80%;
        overflow: hidden;
      }
    }

    > strong {
      font-size: 12px;
    }
  `}
`;
