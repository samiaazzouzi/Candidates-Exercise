import { ApolloClient, ApolloLink, createHttpLink, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'cross-fetch';
import { cache } from './cache';
import { endpoint } from './endpoint';

const generalLink = () => {
  return new ApolloLink();
};

/**
 * BROWSER
 */

const browserHttpLink = createUploadLink({
  uri: endpoint(),
  fetch,
});

// export const browserClient = (apolloState: any): ApolloClient<NormalizedCacheObject> => {
//   return new ApolloClient({
//     cache: cache().restore(apolloState),
//     link: generalLink().concat(browserHttpLink as any),
//   });
// };

export const browserClient = (apolloState: any): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    cache: cache().restore(apolloState),
    link: browserHttpLink,
  });
};

// export const browserClient = (apolloState: any): ApolloClient<NormalizedCacheObject> => {
//   return new ApolloClient({
//     cache: cache().restore(apolloState),
//     uri: 'http://localhost:4000'
//   });
// };
/**
 * SERVER
 */

const serverHttpLink = createHttpLink({
  uri: endpoint(),
  credentials: 'same-origin',
  fetch,
});

export const serverClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: true,
    cache: cache(),
    link: generalLink().concat(serverHttpLink),
  });
};
