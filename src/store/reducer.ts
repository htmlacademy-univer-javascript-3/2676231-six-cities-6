import { createReducer } from '@reduxjs/toolkit';
import { OfferType } from '../offer';
import { User } from '../user';
import { AuthStatus } from '../const';
import { TOKEN_KEY } from '../services/api';
import { changeCity, loadOffers, setOffersDataLoading, setOffersDataError, requireAuthorization, setUser, logout } from './action';

interface State {
  city: string;
  offers: OfferType[];
  isOffersDataLoading: boolean;
  offersDataError: string | null;
  authStatus: AuthStatus;
  user: User | null;
}

const initialState: State = {
  city: 'Paris',
  offers: [],
  isOffersDataLoading: false,
  offersDataError: null,
  authStatus: AuthStatus.NoAuth,
  user: null,
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOffersDataError, (state, action) => {
      state.offersDataError = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(logout, (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.user = null;
      localStorage.removeItem(TOKEN_KEY);
    });
});

export default appReducer;
