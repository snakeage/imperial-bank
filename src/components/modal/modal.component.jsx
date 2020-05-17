import React from 'react';

import {
  TextContainer,
  ModalContainer,
  CloseContainer,
  ModalBodyContainer,
} from './modal.styles';

const Modal = (props) => (
  <ModalContainer>
    <ModalBodyContainer>
      <CloseContainer onClick={props.closeModal}>&#10060;</CloseContainer>
      <TextContainer>Мы с Вами свяжемся в течении 10 минут.</TextContainer>
    </ModalBodyContainer>
  </ModalContainer>
);

export default Modal;