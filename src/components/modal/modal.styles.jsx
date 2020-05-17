import styled from 'styled-components';

export const TextContainer = styled.p`
  font-size: 14px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding-top: 15rem;

  p {
    font-size: 18px;
  }
`;

export const ModalBodyContainer = styled.div`
  position: relative;
  padding: 2rem;
  width: 400px;
  border-radius: 5px;
  background: #fff;
  height: 200px;

  @media screen and (max-width: 800px) {
    min-height: 150px;
    width: 80vw;
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
