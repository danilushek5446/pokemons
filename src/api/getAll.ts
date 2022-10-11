import host from './index';

import type { FetchAllPocemonsType, PocemonQueryType } from '../types/types';

export const getAllPocemons = async (query?: PocemonQueryType): Promise<FetchAllPocemonsType> => {
  if (query) {
    const { data } = await host.get('/', { params: query });

    return data;
  }
  const { data } = await host.get('/');

  return data;
};
