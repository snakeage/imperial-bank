import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleItemHiddenMenu } from '../../redux/header/header.actions';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown.styles';

const HeaderDropDown = ({ toggleItemHiddenMenu }) => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Кредитные карты
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        100 дней без %
      </HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Дебетовые карты
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Imperial карта
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Travel карта
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Аэрофлот
      </HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Специальыне условия
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Как получить отсрочку по кредитам
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Зарплатные карты
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Индивидуальное зарплатное предложение
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Банк для семьи
      </HeaderDropDownLink>
    </Container>
    
  </HeaderDropDownContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleItemHiddenMenu: () => dispatch(toggleItemHiddenMenu()),
});

export default withRouter(connect(null, mapDispatchToProps)(HeaderDropDown));
