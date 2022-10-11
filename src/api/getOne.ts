import axios from 'axios';

import type { OnePokemonType } from '../types/singlePocemonTypes';

export const getOnePocemon = async (url: string): Promise<OnePokemonType> => {
  const { data } = await axios.get(url);

  return data;
};
