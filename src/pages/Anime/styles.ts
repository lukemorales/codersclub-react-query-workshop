import YouTube from 'react-youtube';
import styled, { css } from 'styled-components';

export const Container = styled.article``;

export const Header = styled.header`
  margin-bottom: 60px;
`;

type StatusBadgeProps = { status?: boolean; marginLeft?: number };

export const StatusBadge = styled.span<StatusBadgeProps>`
  ${({ theme, status, marginLeft = 12 }) => css`
    padding: 2px 8px;
    margin-left: ${marginLeft}px;
    display: inline-block;
    background: ${status
      ? theme.colors.accent.soft
      : theme.colors.text.primary};
    color: ${status
      ? theme.colors.accent.primary
      : theme.colors.text.highlight};
    border-radius: 1000px;
    font-size: 10px;
    vertical-align: middle;
  `}
`;

type SectionWrapperProps = {
  marginRight?: number | string;
};

export const SectionWrapper = styled.div<SectionWrapperProps>`
  ${({ marginRight }) => css`
    display: flex;
    gap: 20px;
    margin: 40px 0 0;

    ${marginRight &&
    css`
      margin-right: ${marginRight};
    `}
  `}
`;

export const AnimeThumbnail = styled.img`
  border-radius: 16px;
  width: 225px;
  height: 318px;
  object-fit: cover;
  box-shadow: 0 1px 2px rgba(53, 71, 121, 0.07),
    0 2px 4px rgba(53, 71, 121, 0.07), 0 4px 8px rgba(53, 71, 121, 0.07),
    0 8px 16px rgba(53, 71, 121, 0.07), 0 16px 32px rgba(53, 71, 121, 0.07),
    0 32px 64px rgba(53, 71, 121, 0.07);
`;

type SectionProps = {
  marginTop?: number;
};

export const Section = styled.section<SectionProps>`
  ${({ marginTop = 20 }) => css`
    margin: ${marginTop}px 0 20px;
  `}
`;

export const Player = styled(YouTube)`
  border-radius: 16px;
  margin-top: -172px;
  box-shadow: 0 1px 2px rgba(53, 71, 121, 0.07),
    0 2px 4px rgba(53, 71, 121, 0.07), 0 4px 8px rgba(53, 71, 121, 0.07),
    0 8px 16px rgba(53, 71, 121, 0.07), 0 16px 32px rgba(53, 71, 121, 0.07),
    0 32px 64px rgba(53, 71, 121, 0.07);
`;
