import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    grid-area: content;
  `}
`;

export const HeroImage = styled.img`
  ${() => css`
    width: 100%;
    height: 360px;
    object-fit: cover;
    margin-bottom: 16px;
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
      justify-content: space-between;
      margin-top: 12px;
    }
  `}
`;

export const TopAiring = styled(SeasonHighlight)``;
