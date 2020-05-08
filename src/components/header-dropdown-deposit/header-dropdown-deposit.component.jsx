import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleItemHiddenMenu } from '../../redux/header/header.actions';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown-deposit.styles';

const HeaderDropDownDeposit = ({ toggleItemHiddenMenu }) => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Депозиты
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Победа +
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Потенциал +
      </HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Накопительные счета
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Imperial-счет
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Накопилка
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Мили "Аэрофлот-Бонус" за остаток на счете
      </HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Бесплатные сервисы для накоплений
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Копилка для сдачи
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Копилка для зарплаты
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Автопополнение накопительного счета
      </HeaderDropDownLink>
    </Container>
  </HeaderDropDownContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleItemHiddenMenu: () => dispatch(toggleItemHiddenMenu()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(HeaderDropDownDeposit)
);
