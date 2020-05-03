import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  HeaderDropDownContainer,
  HeaderDropDownLink,
  Container,
} from './header-dropdown-investsment.styles';

const HeaderDropDownInvestsments = () => (
  <HeaderDropDownContainer>
    <Container>
      <HeaderDropDownLink to="/carts">Куда инвестировать</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Индивидуальный инвестицилнный счет
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Паевые фонды</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Облигации</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Накопительное страхование жизьни
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Инвестиционное страхование жизьни
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Доверительное управление
      </HeaderDropDownLink>
    </Container>
    <Container>
      <HeaderDropDownLink to="/carts">Услуги и сервисы</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">
        Управление частным капиталом
      </HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Депозитарные услуги</HeaderDropDownLink>
      <HeaderDropDownLink to="/carts">Возврат налогов</HeaderDropDownLink>
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

export default withRouter(HeaderDropDownInvestsments);
