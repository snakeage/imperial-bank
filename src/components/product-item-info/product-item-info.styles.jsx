import styled from 'styled-components';

export const ProductItemInfoContainer = styled.div`
  padding-left: 20px;
  width: 25vw;
  min-height: 350px;
  flex: 1 1 auto;
  display: flex;
  margin: 40px 7.5px 15px;
  overflow: hidden;
  border: none;
  flex-direction: column;
  position: relative;
  background-color: #f09992;
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
    min-height: 300px;
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

  button {
    bottom: 10px;
    position: absolute;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;
  color: ${({ textColor }) => (textColor ? 'white' : 'black')};
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const MainTextContainer = styled.h2`
  width: 40%;
  font-size: 16px;
  font-weight: lighter;
  border: 1px solid white;
  border-radius: 7px;
  text-align: center;
  animation: heartbeat 3.5s ease infinite;
`;
