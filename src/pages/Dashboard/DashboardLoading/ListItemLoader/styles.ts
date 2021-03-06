import styled, { css } from 'styled-components';
import Skeleton from 'react-loading-skeleton';

type ContainerProps = {
  small?: boolean;
};

export const Container = styled.li<ContainerProps>`
  ${({ theme, small }) => css`
    > div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
        display: block;
        width: ${small ? 192 : 160}px;
        color: ${theme.colors.text};
        margin-top: 4px;
        overflow: hidden;
      }
    }

    & + & {
      margin-left: 20px;
    }
  `}
`;

export const SkeletonLoader = styled(Skeleton).attrs<ContainerProps>(
  ({ small }) => ({
    width: small ? 192 : 160,
    height: small ? 136 : 226,
  }),
)<ContainerProps>``;
