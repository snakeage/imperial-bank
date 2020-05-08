import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleItemHiddenMenu } from '../../redux/header/header.actions';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown-investsment.styles';

const HeaderDropDownInvestsments = ({ toggleItemHiddenMenu }) => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Куда инвестировать
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Индивидуальный инвестицилнный счет
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Паевые фонды
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Облигации
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Накопительное страхование жизьни
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Инвестиционное страхование жизьни
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Доверительное управление
      </HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Услуги и сервисы
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Управление частным капиталом
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Депозитарные услуги
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts" onClick={toggleItemHiddenMenu}>
        Возврат налогов
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
  connect(null, mapDispatchToProps)(HeaderDropDownInvestsments)
);
