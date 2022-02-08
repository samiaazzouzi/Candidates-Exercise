import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { App } from '@application/components';
import { Request } from 'express';
import { FC } from 'react';
import { StaticRouter } from 'react-router';
import { RecoilRoot } from 'recoil';

export interface ServerAppProps {
  serverRequest: Request;
  client: ApolloClient<NormalizedCacheObject>;
}

export const ServerApp: FC<ServerAppProps> = (props) => {
  const { serverRequest, client } = props;
  const { originalUrl } = serverRequest;

  return (
    <ApolloProvider client={client}>
      <StaticRouter location={originalUrl}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </StaticRouter>
    </ApolloProvider>
  );
};
