import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  height: 600px;
  min-width: 100%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0 15px;
  overflow: hidden;
  /* position: relative; */
  border: none;
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
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 400px;
  min-height: 200px;
  /* margin-left: 550px; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* border: 1px solid black; */
  /* background-color: white; */
  opacity: 0.9;
  position: absolute;

  button {
    width: 50%;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 35px;
  margin-bottom: 10px;
  color: ${({ textColor }) => (textColor ? 'white' : 'black')};
`;

export const ContentSubtitle = styled.span`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 20px;
`;
