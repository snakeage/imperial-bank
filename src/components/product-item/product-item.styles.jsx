import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  width: 25vw;
  min-height: 350px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 7.5px 15px;
  overflow: hidden;
  border: none;
  flex-direction: column;
  &:hover {
   
    & .content {
      opacity: 0.95;
    }
  }
  
  @keyframes heartbeat {
    from {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    min-height: 250px;
    margin-top: 15px;
  }
`;

export const ImageContainer = styled.img`
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 15px;
  width: 50px;
  left: 40px;
  animation: heartbeat 3.5s ease infinite;
`;

export const ContentContainer = styled.div`
  width: 300px;
  min-height: 200px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;
  color: ${({ textColor }) => (textColor ? 'white' : 'black')};
`;

export const ContentSubtitle = styled.span`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 20px;
`;
