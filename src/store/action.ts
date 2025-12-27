import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../mocks/offers';

export const changeCity = createAction<string>('app/changeCity');

export const loadOffers = createAction<OfferType[]>('app/loadOffers');
