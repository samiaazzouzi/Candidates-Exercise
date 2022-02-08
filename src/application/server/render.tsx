/* eslint-disable react/no-danger */
import { getDataFromTree } from '@apollo/client/react/ssr';
import { serverClient } from '@application/apollo';
import { ServerApp } from '@application/components/app';
import 'dayjs/locale/fr';
import 'dayjs/locale/nl';
import { Request, Response } from 'express';
import { renderToStaticMarkup } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { CONSOLE_COLOR, POLYFILL_SCRIPT_URL } from './constants';

export const serverRenderer = async (req: Request, res: Response) => {
  console.log(CONSOLE_COLOR.FgBlue, `\n[SSR] Rendered for url: ${req.originalUrl}\n\n`);

  const client = serverClient();

  const apolloContent = await getDataFromTree(<ServerApp serverRequest={req} client={client} />);

  const initialApolloState = client.extract();

  const helmet = Helmet.renderStatic();

  const renderString = renderToStaticMarkup(
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.base.toComponent()}
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}

        <link rel="preload" as="style" href="https://use.typekit.net/rvt6yts.css" />
        <link rel="stylesheet" href="https://use.typekit.net/rvt6yts.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link href="/client.css" rel="stylesheet" />

        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWjNOsYs6-HDrhWIqe5D5XjFa_4HZLdaY&libraries=places"
        />
        <script crossOrigin="anonymous" src={POLYFILL_SCRIPT_URL} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.apolloState = ${JSON.stringify(initialApolloState).replace(/</g, '\\u003c')};
          `,
          }}
        />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: apolloContent }} />
        <div id="modal-root" />
        <script src="/client.js" />
      </body>
    </html>,
  );

  res.setHeader('content-type', 'text/html');
  res.write('<!DOCTYPE html>');
  res.end(renderString);
};
