import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
  hidden: true,
  hiddenLoan: true,
  hiddenMortage: true,
  hiddenDeposit: true,
  hiddenInvestments: true,
  headerItems: [
    {
      title: 'Услуга',
      id: 1,
    },
  ],
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
        hiddenLoan: true,
        hiddenMortage: true,
        hiddenDeposit: true,
        hiddenInvestments: true,
      };
    case HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_LOAN:
      return {
        ...state,
        hiddenLoan: !state.hiddenLoan,
        hidden: true,
        hiddenMortage: true,
        hiddenDeposit: true,
        hiddenInvestments: true,
      };
    case HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_MORTAGE:
      return {
        ...state,
        hiddenMortage: !state.hiddenMortage,
        hidden: true,
        hiddenLoan: true,
        hiddenDeposit: true,
        hiddenInvestments: true,
      };
    case HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_DEPOSIT:
      return {
        ...state,
        hiddenDeposit: !state.hiddenDeposit,
        hidden: true,
        hiddenLoan: true,
        hiddenMortage: true,
        hiddenInvestments: true,
      };
    case HeaderActionTypes.TOGGLE_HEADER_ITEM_HIDDEN_INVESTMENTS:
      return {
        ...state,
        hiddenInvestments: !state.hiddenInvestments,
        hidden: true,
        hiddenLoan: true,
        hiddenMortage: true,
      };
    default:
      return state;
  }
};

export default headerReducer;
