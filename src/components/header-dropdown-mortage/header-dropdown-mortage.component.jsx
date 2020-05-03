import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown-mortage.styles';

const HeaderDropDownMortage = () => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts">Готовое жилье</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Строящееся жилье</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Рефинансирование ипотеки
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Кредит под залог имеющеегося жилья
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Как получить отсрочку по кредитам
      </HeaderDropDownLink>
    </Container>
  </HeaderDropDownContainer>
);

export default withRouter(HeaderDropDownMortage);
