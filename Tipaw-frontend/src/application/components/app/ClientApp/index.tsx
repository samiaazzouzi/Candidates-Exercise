import { ApolloProvider } from '@apollo/client';
import { browserClient } from '@application/apollo';
import { App } from '@application/components';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export const ClientApp = () => {
  const { apolloState } = window;

  const client = browserClient(apolloState);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </ApolloProvider>
  );
};
