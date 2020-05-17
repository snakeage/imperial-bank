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
