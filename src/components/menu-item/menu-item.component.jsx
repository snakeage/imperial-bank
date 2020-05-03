import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({
  title,
  subtitle,
  button,
  imageUrl,
  size,
  textColor,
  history,
  linkUrl,
  match,
}) => (
  <MenuItemContainer>
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer>
      <ContentTitle textColor={textColor}>{title}</ContentTitle>
      <ContentSubtitle>{subtitle}</ContentSubtitle>
      <CustomButton onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {button}
      </CustomButton>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
