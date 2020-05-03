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
      <Links>О банке</Links>
      <Links>Вакансии</Links>
      <Links>Реквизиты</Links>
      <Links>Пресс-служба</Links>
      <Links>Тариф и документы</Links>
      <Links>Иностранным гражданам</Links>
      <Links>Тендерный комитет</Links>
      <Links>Скидки по картам</Links>
      <Links>Imperial-обучение</Links>
      <Links>Обратная связь</Links>
      <Links>Карта сайта</Links>
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
