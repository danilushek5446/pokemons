/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { PocemonInitialType } from '../../types/types';
import { getPokemons } from './pokemonThunk';

export const initialState: PocemonInitialType = {
  pocemonArray: [],
  count: 0,
};

export const pokemonSlice = createSlice({
  name: 'pocemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pocemonArray = action.payload.results;
      state.count = action.payload.count;
    });
  },
});

export default pokemonSlice.reducer;
