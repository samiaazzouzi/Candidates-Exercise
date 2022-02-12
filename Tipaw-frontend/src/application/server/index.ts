import express from 'express';
import path from 'path';
import { CONSOLE_COLOR } from './constants';
import { serverRenderer } from './render';

const buildFolder = path.resolve('build');

const REGEX_NO_FILE_EXTENSION =
  /^(.(?!.*\.jpeg$|.*\.jpg$|.*\.png$|.*\.gif$|.*\.txt$|.*\.xml$|.*\.woff$|.*\.ttf$|.*\.oet$|.*\.mp3$|.*\.mp4$|.*\.mov$|.*\.ico$|.*\.svg$|.*\.js$|.*\.css$))*$/;

// Call this to create and start a new express server, handling ssr
export const startSsrServer = () => {
  const app = express();

  app.use(express.static(buildFolder));

  app.use(REGEX_NO_FILE_EXTENSION, serverRenderer);

  app.listen(process.env.PORT || 8500, (): void => {
    console.log(
      CONSOLE_COLOR.FgBlue,
      `🚀 [SSR] Launched at http://localhost:${process.env.PORT || 8500}`,
    );
  });

  return app;
};

startSsrServer();
