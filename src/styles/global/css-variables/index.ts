import { css } from 'styled-components';

export const THEME_CSS_VARIABLES = css`
  body,
  body[data-theme='light'] {
    --color-background: #ffffff;

    --color-accent-primary: #e71d60;
    --color-accent-primary-soft: #fde8ef;

    --color-accent-secondary: #334168;

    --color-text-primary: #76879e;
    --color-text-secondary: #8d9aae;
    --color-text-bold: #354779;
    --color-text-highlight: #ffffff;

    --color-stars-fill: #fa7c06;
    --color-stars-empty: #dae5ff;

    --color-border: #e8efff;
    --color-search-bar: #f1f7ff;
  }

  body[data-theme='dark'] {
    --color-background: #151619;

    --color-accent-primary: #e71d60;
    --color-accent-primary-soft: #472a33;

    --color-accent-secondary: #334168;

    --color-text-primary: #76879e;
    --color-text-secondary: #8d9aae;
    --color-text-bold: #728fe1;
    --color-text-highlight: #ffffff;

    --color-stars-fill: #fa7c06;
    --color-stars-empty: #6e727a;

    --color-border: #2c2e33;
    --color-search-bar: #f1f7ff;
  }
`;
