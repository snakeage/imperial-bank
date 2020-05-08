import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleItemHiddenMenu } from '../../redux/header/header.actions';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown-mortage.styles';

const HeaderDropDownMortage = ({ toggleItemHiddenMenu }) => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Готовое жилье
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Строящееся жилье
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Рефинансирование ипотеки
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Кредит под залог имеющеегося жилья
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Как получить отсрочку по кредитам
      </HeaderDropDownLink>
    </Container>
  </HeaderDropDownContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleItemHiddenMenu: () => dispatch(toggleItemHiddenMenu()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(HeaderDropDownMortage)
);
