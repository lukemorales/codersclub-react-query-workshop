import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${() => css`
    max-width: 600px;

    > a {
      display: flex;
      color: currentColor;

      img {
        width: 64px;
        height: 92px;
        object-fit: cover;
        margin-right: 16px;
        border-radius: 6px;
        box-shadow: 0 1px 1px rgba(53, 71, 121, 0.11),
          0 2px 2px rgba(53, 71, 121, 0.11), 0 4px 4px rgba(53, 71, 121, 0.11),
          0 6px 8px rgba(53, 71, 121, 0.11), 0 8px 16px rgba(53, 71, 121, 0.11);
      }
    }

    & + & {
      margin-top: 24px;
    }
  `}
`;

export const DataWrapper = styled.div`
  ${() => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;

    > div:last-child {
      margin-top: auto;
    }
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
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: auto;
        overflow: hidden;
      }
    }

    > strong {
      font-size: 12px;
    }
  `}
`;
