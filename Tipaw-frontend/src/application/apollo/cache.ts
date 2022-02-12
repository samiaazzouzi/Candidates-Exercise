import { InMemoryCache } from '@apollo/client';

export const cache = () => {
  return new InMemoryCache();
};
