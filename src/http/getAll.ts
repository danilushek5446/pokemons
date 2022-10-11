import type { FetchAllPocemonsType } from '../types/types';
import host from './index';

export const getAllBooks = async (): Promise<FetchAllPocemonsType> => {
  const { data } = await host.get('/');

  return data;
};
