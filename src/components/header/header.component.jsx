import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HeaderDropDown from '../header-dropdown/header-dropdown.component';
import HeaderDropDownLoan from '../header-dropdown-loan/header-dropdown-loan.component';
import HeaderDropDownMortage from '../header-dropdown-mortage/header-dropdown-mortage.component';
import HeaderDropDownDeposit from '../header-dropdown-deposit/header-dropdown-deposit.component';
import HeaderDropDownInvestsment from '../header-dropdown-investsment/header-dropdown-investsment.component';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  selectHeaderHidden,
  selectHeaderHiddenLoan,
  selectHeaderHiddenMortage,
  selectHeaderHiddenDeposit,
  selectHeaderHiddenInvestments,
  selectHeaderItems,
} from '../../redux/header/header.selectors';

import {
  toggleItemHidden,
  toggleItemHiddenLoan,
  toggleItemHiddenMortage,
  toggleItemHiddenDeposit,
  toggleItemHiddenInvestments,
} from '../../redux/header/header.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Container,
  OptionLinkSub,
  Divider,
  Hamburger,
  HamburgerSpan
} from './header.styles';

const Header = ({
  currentUser,
  hidden,
  hiddenLoan,
  hiddenMortage,
  hiddenDeposit,
  hiddenInvestments,
  headerItems,
  toggleItemHidden,
  toggleItemHiddenLoan,
  toggleItemHiddenMortage,
  toggleItemHiddenDeposit,
  toggleItemHiddenInvestments,
}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <Hamburger>
      <HamburgerSpan></HamburgerSpan>
      <HamburgerSpan></HamburgerSpan>
      <HamburgerSpan></HamburgerSpan>
    </Hamburger>
    <Container>
      <OptionsContainer>
        <OptionLink to="/header-option">Частным клиентам</OptionLink>
        <OptionLink to="/header-option">Малый бизнес и ИП</OptionLink>
        <OptionLink to="/header-option">Средний и крупный бизнес</OptionLink>
        <OptionLink to="/header-option">Финансовым организациям</OptionLink>
        <OptionLink to="/header-option">Клуб</OptionLink>
        <OptionLink to="/header-option">Инвестбанк</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            {currentUser.displayName} (Выйти)
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Интернет-банк</OptionLink>
        )}
      </OptionsContainer>
      <Divider />
      <OptionsContainer>
        <OptionLinkSub onClick={toggleItemHidden}>Карты</OptionLinkSub>
        <OptionLinkSub onClick={toggleItemHiddenLoan}>Кредиты</OptionLinkSub>
        <OptionLinkSub onClick={toggleItemHiddenMortage}>Ипотека</OptionLinkSub>
        <OptionLinkSub onClick={toggleItemHiddenDeposit}>Вклады</OptionLinkSub>
        <OptionLinkSub onClick={toggleItemHiddenInvestments}>
          Инвестиции
        </OptionLinkSub>
      </OptionsContainer>
    </Container>
    {hidden ? null : <HeaderDropDown />}
    {hiddenLoan ? null : <HeaderDropDownLoan />}
    {hiddenMortage ? null : <HeaderDropDownMortage />}
    {hiddenDeposit ? null : <HeaderDropDownDeposit />}
    {hiddenInvestments ? null : <HeaderDropDownInvestsment />}
  </HeaderContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleItemHidden: () => dispatch(toggleItemHidden()),
  toggleItemHiddenLoan: () => dispatch(toggleItemHiddenLoan()),
  toggleItemHiddenMortage: () => dispatch(toggleItemHiddenMortage()),
  toggleItemHiddenDeposit: () => dispatch(toggleItemHiddenDeposit()),
  toggleItemHiddenInvestments: () => dispatch(toggleItemHiddenInvestments()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  headerItems: selectHeaderItems,
  hidden: selectHeaderHidden,
  hiddenLoan: selectHeaderHiddenLoan,
  hiddenMortage: selectHeaderHiddenMortage,
  hiddenDeposit: selectHeaderHiddenDeposit,
  hiddenInvestments: selectHeaderHiddenInvestments,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
