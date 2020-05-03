import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown.styles';

const HeaderDropDown = () => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts">Кредитные карты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">100 дней без %</HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts">Дебетовые карты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Imperial карта</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Travel карта</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Аэрофлот</HeaderDropDownLink>
      </Container>
      <Container>
      <HeaderDropDownLink to="/carts">Специальыне условия</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Как получить отсрочку по кредитам</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Зарплатные карты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Индивидуальное зарплатное предложение</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Банк для семьи</HeaderDropDownLink>
    </Container>
  </HeaderDropDownContainer>
);

export default withRouter(HeaderDropDown);
