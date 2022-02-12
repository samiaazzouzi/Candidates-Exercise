export const BREAKPOINTS = {
  phone: 480,
  small: 600,
  tablet: 800,
  medium: 1000,
  header: 1040,
  desktop: 1280,
  max: 1320,
};

export type MediaQueryWidthType = 'max' | 'min';

export type MediaQueryBreakpoint = keyof typeof BREAKPOINTS | number;

export const mediaQuery = (
  breakpoint: MediaQueryBreakpoint,
  type: MediaQueryWidthType = 'max',
): string => {
  let width = 0;
  if (typeof breakpoint === 'number') width = breakpoint;
  else width = BREAKPOINTS[breakpoint] + (type === 'min' ? 1 : 0);
  return `@media (${type}-width: ${width}px)`;
};

export const mediaQueryBetween = (min: MediaQueryBreakpoint, max: MediaQueryBreakpoint): string => {
  let minWidth = min;
  let maxWidth = max;
  if (typeof minWidth !== 'number') minWidth = BREAKPOINTS[minWidth];
  if (typeof maxWidth !== 'number') maxWidth = BREAKPOINTS[maxWidth];
  return `@media (max-width: ${maxWidth}px) and (min-width: ${minWidth}px)`;
};
