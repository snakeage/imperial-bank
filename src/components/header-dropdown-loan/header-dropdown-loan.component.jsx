import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import {
  toggleItemHiddenMenu,
} from '../../redux/header/header.actions';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown-loan.styles';

const HeaderDropDownLoan = ({toggleItemHiddenMenu}) => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>Кредиты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>Кредит наличными</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>Рефинансирование</HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>Кредитные карты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>100 дней без %</HeaderDropDownLink>
      </Container>
      <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>Погашение кредита</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>Работа со справками</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>Как получить отсрочку по кредитам</HeaderDropDownLink>
    </Container>
  </HeaderDropDownContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleItemHiddenMenu: () => dispatch(toggleItemHiddenMenu()),
});

export default withRouter(connect(null, mapDispatchToProps)(HeaderDropDownLoan));
