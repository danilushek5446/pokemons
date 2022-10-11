import host from './index';

import type { OnePokemonType } from '../types/singlePocemonTypes';

export const getOneById = async (id?: number): Promise<OnePokemonType> => {
  const { data } = await host.get(`/${id}`);

  return data;
};
