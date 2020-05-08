import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const HeaderDropDownContainer = styled.div`
  padding: 30px 20px 40px 100px;
  display: flex;

  /* justify-content: space-between; */
  min-height: 200px;
  width: 100%;
  position: absolute;
  top: 135px;
  background-color: #fff;
  z-index: 10;
  opacity: 0.9;

  @media screen and (max-width: 800px) {
    position: fixed;
    margin-left: 48%;
    width: 50%;
    padding: 5px;
    overflow: scroll;
    flex-direction: column;
    top: 0px;
  }
`;

export const HeaderDropDownLink = styled(Link)`
  display: flex;
  padding: 7px;

  @media screen and (max-width: 800px) {
    width: 100px;
  }

  &:first-child {
    font-weight: bold;
  }
`;
