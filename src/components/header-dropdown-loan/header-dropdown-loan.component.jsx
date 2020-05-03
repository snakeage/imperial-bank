import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown-loan.styles';

const HeaderDropDownLoan = () => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts">Кредиты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Кредит наличными</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Рефинансирование</HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts">Кредитные карты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">100 дней без %</HeaderDropDownLink>
      </Container>
      <Container>
      <HeaderDropDownLink to="/carts">Погашение кредита</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Работа со справками</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Как получить отсрочку по кредитам</HeaderDropDownLink>
    </Container>
  </HeaderDropDownContainer>
);

export default withRouter(HeaderDropDownLoan);
