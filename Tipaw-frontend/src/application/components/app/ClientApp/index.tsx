import { ApolloProvider } from '@apollo/client';
import { browserClient } from '@application/apollo';
import { App, LandingPageController } from '@application/components';
import { DetailsPage } from '@presentation/components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export const ClientApp = () => {

  const { apolloState } = window;

  const client = browserClient(apolloState);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Switch>
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/" component={LandingPageController} />
      </Switch>

        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </ApolloProvider>
  );
};
