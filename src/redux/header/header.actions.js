import HeaderActionTypes from './header.types';

export const toggleItemHidden = () => ({
  type: HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN,
});

export const toggleItemHiddenLoan = () => ({
  type: HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_LOAN,
});
export const toggleItemHiddenMortage = () => ({
  type: HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_MORTAGE,
});
export const toggleItemHiddenDeposit = () => ({
  type: HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_DEPOSIT,
});
export const toggleItemHiddenInvestments = () => ({
  type: HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_INVESTMENTS,
});

export const toggleItemHiddenMenu = () => ({
  type: HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_MENU,
});
