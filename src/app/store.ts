import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

import authorisationReducer from '../features/authorisation/authorisationSlice';
import counterReducer from '../features/counter/counterSlice';
import importsSliceReducer from '../features/imports/importsSlice';
import spotifyExampleReducer from '../features/spotifyExample/spotifyExampleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authorisation: authorisationReducer,
    spotifyExample: spotifyExampleReducer,
    imports: importsSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
