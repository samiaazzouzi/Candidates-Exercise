import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, lightTheme } from '@presentation/styles';
import 'core-js';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import 'dayjs/locale/nl';
import calendar from 'dayjs/plugin/calendar';
import duration from 'dayjs/plugin/duration';
import minMax from 'dayjs/plugin/minMax';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import 'presentation/styles/css-reset.css';
import { Helmet } from 'react-helmet';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(minMax);
dayjs.extend(utc);
dayjs.extend(calendar);

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Tipaw Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};
