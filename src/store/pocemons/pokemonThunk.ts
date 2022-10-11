import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllPocemons } from '../../http/getAll';
import type { PocemonQueryType } from '../../types/types';

export const getPokemons = createAsyncThunk(
  'pocemons/getPokemons',
  async (query?: PocemonQueryType) => {
    // eslint-disable-next-line no-console
    console.log(query);
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await getAllPocemons(query);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
