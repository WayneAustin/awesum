import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface AuthorisationState {
  loggedIn: boolean;
  accessToken: string;
  tokenExpiryDate: string;
}

const initialState: AuthorisationState = {
  loggedIn: false,
  accessToken: '',
  tokenExpiryDate: '',
};

export const authorisationSlice = createSlice({
  name: 'authorisation',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setTokenExpiryDate: (state, action: PayloadAction<number>) => {
      const date = new Date()
      date.setSeconds(date.getSeconds() + action.payload);
      state.tokenExpiryDate = date.toISOString();
    },
  },
});

export const { setLoggedIn, setAccessToken, setTokenExpiryDate } = authorisationSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.authorisation.loggedIn;
export const selectAccessToken = (state: RootState) => state.authorisation.accessToken;
export const selectTokenExpiryDate = (state: RootState) => state.authorisation.tokenExpiryDate;

export default authorisationSlice.reducer;