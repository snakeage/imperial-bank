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
    /* cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		} */
    & .content {
      opacity: 0.95;
    }
  }
  /* &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  } */

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
`;

export const ImageContainer = styled.img`
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 15px;
  width: 50px;
  left: 40px;
  animation: heartbeat 3.5s ease infinite;

    
  /* background-size: cover;
  background-position: center; */
  /* background-image: ${({ imageUrl }) => `url(${imageUrl})`}; */
`;

export const ContentContainer = styled.div`
  width: 300px;
  min-height: 200px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* border: 1px solid black; */
  /* background-color: white; */
  opacity: 0.9;
  /* position: absolute; */

  button {
    
  }
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
