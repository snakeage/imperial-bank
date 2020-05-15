import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const menuActive = css`
  left: 0%;
`;

const hamburgerActive = css`
  margin-bottom: -2px;
  &:nth-child(1) {
    transform: translateY(3px) rotate(-45deg);
  }
  &:nth-child(2) {
    display: none;
  }
  &:nth-child(3) {
    transform: translateY(3px) rotate(45deg);
  }
`;

const gethamburgerActive = ({ hiddenMenu }) => {
  return hiddenMenu ? null : hamburgerActive;
};

const getMenuActive = ({ hiddenMenu }) => {
  return hiddenMenu ? null : menuActive;
};

export const HeaderContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 50px;
    justify-content: start;
    background-color: #f3544a;
    position: relative;
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    display: flex;
    /* display: none; */
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100vh;
    padding: 20px 15px;
    background-color: rgba(0, 0, 0, 0.8);
    transition: 0.6s all;
    z-index: 2;
    ${getMenuActive}
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    padding: 5px;
    margin-left: 43%;
  }
`;

export const OptionsContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  /* flex-direction: column; */
`;

export const OptionLink = styled(Link)`
  padding: 5px 8px;
  cursor: pointer;

  &:hover {
    color: #f3544a;
  }

  &:last-child {
    /* margin-left: 60px; */
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
  }

  @media screen and (max-width: 800px) {
    color: white;

    &:last-child {
      margin-left: 0px;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const OptionLinkSub = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #f3544a;
  }

  @media screen and (max-width: 800px) {
    color: white;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 4px;
  background-color: #e80000;
  margin: 0 auto;
`;

export const Hamburger = styled.div`

@media screen and (max-width: 800px) {
  display: block;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 12px;
}
`;

export const HamburgerSpan = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 2px;
  transition: 0.5s all;
  ${gethamburgerActive}
`;
