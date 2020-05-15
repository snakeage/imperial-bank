import styled from 'styled-components';

export const ConnectFormContainer = styled.div`
  margin: 0 90px;
  padding: 48px 98px;
  border: 1px solid #f6f7f9;
  box-shadow: 3px 3px 20px #e3e6ec;

  @media screen and (max-width: 800px) {
    margin: 0;
    padding: 0;
  }
`;

export const TextContainer = styled.p`
  font-size: 14px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 4px;
  background-color: #e80000;
  margin: 0 auto;
`;

export const ContactCaonainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 45%;
  }
`;

export const ButtonContainer = styled.div`
  padding: 16px;
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f7f9;

  button {
    width: 45%;
  }

  p {
    width: 35%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    position: relative;

    button {
      width: 75%;
    }
    p {
      width: 75%;
    }
  }
`;

export const ImageContainer = styled.img`
  @media screen and (max-width: 800px) {
    position: absolute;
    top: 40px;
    left: 10px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #f6f7f9;
  box-shadow: 3px 3px 20px #e3e6ec;
  height: 200px;
  width: 500px;
  position: fixed;
  top: 200px;
  opacity: 0.95;

  p {
    font-size: 18px;
  }

  @media screen and (max-width: 800px) {
    height: 30vw;
    width: 80vw;
  }
`;

export const OpacityContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  right: -0%;

  @media screen and (max-width: 800px) {
    height: 850px;
    width: 100vw;
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: -30px;
  top: -10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
