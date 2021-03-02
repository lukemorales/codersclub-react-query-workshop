import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 40px;
    grid-area: content;
    border-inline: 2px solid ${theme.colors.border};
  `}
`;

export const HeroImage = styled.img`
  ${() => css`
    width: 100%;
    height: 360px;
    margin-bottom: 36px;
    object-fit: cover;
    border-radius: 32px;
    box-shadow: 0 1px 2px rgba(53, 71, 121, 0.07),
      0 2px 4px rgba(53, 71, 121, 0.07), 0 4px 8px rgba(53, 71, 121, 0.07),
      0 8px 16px rgba(53, 71, 121, 0.07), 0 16px 32px rgba(53, 71, 121, 0.07),
      0 32px 64px rgba(53, 71, 121, 0.07);
  `}
`;

export const SeasonHighlight = styled.section`
  ${() => css`
    margin-top: 20px;

    > ul {
      display: flex;
      margin-top: 12px;

      > li {
        img {
          border-radius: 8px;
          height: 226px;
          object-fit: cover;
          box-shadow: 0 1px 1px rgba(53, 71, 121, 0.11),
            0 2px 2px rgba(53, 71, 121, 0.11), 0 4px 4px rgba(53, 71, 121, 0.11),
            0 6px 8px rgba(53, 71, 121, 0.11),
            0 8px 16px rgba(53, 71, 121, 0.11);
        }

        span {
          font-size: 14px;
          display: block;
          width: 150px;
          text-overflow: ellipsis;
          white-space: nowrap;
          pointer-events: auto;
          overflow: hidden;
        }

        + li {
          margin-left: 20px;
        }
      }
    }
  `}
`;

export const TopAiring = styled(SeasonHighlight)`
  ${() => css`
    > ul > li img {
      width: 192px;
      height: 120px;
    }
  `}
`;
