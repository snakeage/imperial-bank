import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown-deposit.styles';

const HeaderDropDownDeposit = () => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts">Депозиты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Победа +</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Потенциал +</HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts">Накопительные счета</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Imperial-счет</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Накопилка</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Мили "Аэрофлот-Бонус" за остаток на счете
      </HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts">
        Бесплатные сервисы для накоплений
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Копилка для сдачи</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Копилка для зарплаты</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Автопополнение накопительного счета
      </HeaderDropDownLink>
    </Container>
  </HeaderDropDownContainer>
);

export default withRouter(HeaderDropDownDeposit);
