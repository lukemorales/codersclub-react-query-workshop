import styled, { css } from 'styled-components';

type ContainerProps = {
  small?: boolean;
};

export const Container = styled.li<ContainerProps>`
  ${({ theme, small }) => css`
    > a {
      display: flex;
      flex-direction: column;
      background: none;
      padding: 0;
      color: ${theme.colors.text};

      img {
        border-radius: 8px;
        object-fit: cover;
        object-position: center center;
        box-shadow: 0 1px 1px rgba(53, 71, 121, 0.11),
          0 2px 2px rgba(53, 71, 121, 0.11), 0 4px 4px rgba(53, 71, 121, 0.11),
          0 6px 8px rgba(53, 71, 121, 0.11), 0 8px 16px rgba(53, 71, 121, 0.11);

        ${small
          ? css`
              width: 192px;
              height: 136px;
            `
          : css`
              width: 160px;
              height: 226px;
            `}
      }

      span {
        font-size: 14px;
        display: block;
        width: ${small ? 192 : 160}px;
        color: ${theme.colors.text};
        margin-top: 8px;
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: auto;
        overflow: hidden;
      }
    }

    & + & {
      margin-left: 20px;
    }
  `}
`;
