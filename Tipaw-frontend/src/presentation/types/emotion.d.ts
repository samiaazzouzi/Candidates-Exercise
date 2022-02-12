import '@emotion/react';
import { lightTheme } from '@presentation/styles';

type DefaultTheme = typeof lightTheme;

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
