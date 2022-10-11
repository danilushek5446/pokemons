import { configureStore } from '@reduxjs/toolkit';

import pokemonSlice from './pocemons/pokemonSlice';

export const store = configureStore({
  reducer: {
    poceomons: pokemonSlice,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
