import { css } from '@emotion/react';
import { mediaQuery } from './breakpoints';

export const responsiveFontSize = (fontSize: number, changeFactor = 1) => css`
  font-size: ${fontSize}px;

  ${mediaQuery('desktop')} {
    font-size: ${fontSize - changeFactor}px;
  }

  ${mediaQuery('tablet')} {
    font-size: ${fontSize - 2 * changeFactor}px;
  }

  ${mediaQuery('phone')} {
    font-size: ${fontSize - 3 * changeFactor}px;
  }
`;
