import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import FormInputCheckBox from '../../components/form-input-checkbox/form-input-checkbox.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Modal from '../../components/modal/modal.component';

import {
  ConnectFormContainer,
  TextContainer,
  Divider,
  ContactCaonainer,
  ButtonContainer,
  ImageContainer,
} from './connect-form.styles';

class ConnectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      surname: '',
      name: '',
      phone: '',
      email: '',
      checkbox: false,
      modalHidden: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      surname: '',
      name: '',
      phone: '',
      email: '',
      checkbox: '',
      modalHidden: !this.state.modalHidden,
    });

    // alert('Мы с Вами свяжемся в течении 10 минут.');
  };

  handleSubmitModal = (event) => {
    event.preventDefault();

    this.setState({
      modalHidden: !this.state.modalHidden,
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, surname, phone, email, checkbox, modalHidden } = this.state;
    return (
      <ConnectFormContainer>
        <TextContainer>
          Получите +30% к одобрению, заполнив форму.
        </TextContainer>
        <Divider />
        <TextContainer>+6% к одобрению за заполнение поля Имя.</TextContainer>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="surname"
            value={surname}
            onChange={this.handleChange}
            label="Фамилия"
            required
          />
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Имя"
            required
          />
          <ContactCaonainer>
            <FormInput
              type="tel"
              pattern="[+7]{2}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
              placeholder="+71234567890"
              name="phone"
              value={phone}
              onChange={this.handleChange}
              label="Мобильный телефон"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Электронная почта"
              required
            />
          </ContactCaonainer>
          <FormInputCheckBox
            type="checkbox"
            name="checkbox"
            value={checkbox}
            checked={checkbox}
            onChange={this.handleChange}
            label="Я соглашаюсь с условиями и даю свое согласие на обработку и использование моих персональных данных, и разрешаю сделать запрос в бюро кредитных историй"
            required
          />
          <ButtonContainer>
            <ImageContainer
              src="https://alfabank.st/media/icon_category-guard_xl_black.svg"
              alt="shield"
            />
            <TextContainer>
              Мы гарантируем безопасность и сохранность ваших данных
            </TextContainer>
            <CustomButton type="submit">Продолжить</CustomButton>
          </ButtonContainer>
        </form>
        {modalHidden ? null : <Modal closeModal={this.handleSubmitModal} />}
      </ConnectFormContainer>
    );
  }
}

export default ConnectForm;
