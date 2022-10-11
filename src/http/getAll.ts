import axios from 'axios';
import { myConfig } from '../myConfig';

import type { FetchAllPocemonsType, PocemonQueryType } from '../types/types';

export const getAllPocemons = async (query?: PocemonQueryType): Promise<FetchAllPocemonsType> => {
  const host = axios.create({
    baseURL: myConfig.apiURL,
  });

  if (query) {
    const { data } = await host.get('/', { params: query });

    return data;
  }
  const { data } = await host.get('/');

  return data;
};
