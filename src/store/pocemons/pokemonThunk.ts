import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllPocemons } from '../../api/getAll';
import type { PocemonQueryType } from '../../types/types';

export const getPokemons = createAsyncThunk(
  'pocemons/getPokemons',
  async (query?: PocemonQueryType) => {
    const response = await getAllPocemons(query);
    return response;
  },
);
