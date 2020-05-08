import React from 'react';

import {
  FooterContainer,
  LinkContainer,
  Links,
  MediaContainet,
  ImageContainerVk,
  ImageContainerInstagram,
  ImageContainerFaceBook,
  ImageContainerTwitter,
  ImageContainerYoutube,
  ImageContainerApplePay,
} from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <LinkContainer>
      <Links to="/info">О банке</Links>
      <Links to="/info">Вакансии</Links>
      <Links to="/info">Реквизиты</Links>
      <Links to="/info">Пресс-служба</Links>
      <Links to="/info">Тариф и документы</Links>
      <Links to="/info">Иностранным гражданам</Links>
      <Links to="/info">Тендерный комитет</Links>
      <Links to="/info">Скидки по картам</Links>
      <Links to="/info">Imperial-обучение</Links>
      <Links to="/info">Обратная связь</Links>
      <Links to="/info">Карта сайта</Links>
    </LinkContainer>
    <MediaContainet>
      <ImageContainerVk />
      <ImageContainerInstagram />
      <ImageContainerFaceBook />
      <ImageContainerTwitter />
      <ImageContainerYoutube />
      <ImageContainerApplePay />
    </MediaContainet>
  </FooterContainer>
);

export default Footer;
