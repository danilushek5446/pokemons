import axios from 'axios';

import type { OnePokemonType } from '../types/singlePocemonTypes';

export const getOnePocemon = async (url: string): Promise<OnePokemonType> => {
  const host = axios.create({
    baseURL: url,
  });

  const { data } = await host.get('/');

  return data;
};
