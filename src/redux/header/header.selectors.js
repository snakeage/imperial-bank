import { createSelector } from 'reselect';

const selectHeader = (state) => state.header;

export const selectHeaderHidden = createSelector(
  [selectHeader],
  (header) => header.hidden
);

export const selectHeaderHiddenLoan = createSelector(
  [selectHeader],
  (header) => header.hiddenLoan
);
export const selectHeaderHiddenMortage = createSelector(
  [selectHeader],
  (header) => header.hiddenMortage
);
export const selectHeaderHiddenDeposit = createSelector(
  [selectHeader],
  (header) => header.hiddenDeposit
);
export const selectHeaderHiddenInvestments = createSelector(
  [selectHeader],
  (header) => header.hiddenInvestments
);

export const selectHeaderHiddenMenu = createSelector(
  [selectHeader],
  (header) => header.hiddenMenu
);

export const selectHeaderItems = createSelector(
  [selectHeader],
  (header) => header.headerItems
);
