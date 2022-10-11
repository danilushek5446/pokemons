import { configureStore } from '@reduxjs/toolkit';

import pokemonSlice from './pocemons/pokemonSlice';

export const store = configureStore({
  reducer: {
    pocemons: pokemonSlice,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
