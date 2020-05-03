import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import {
  ProductItemInfoContainer,
  MainTextContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './product-item-info.styles';

const ProductItemInfo = ({
  title,
  subtitle,
  button,
  imageUrl,
  textColor,
  history,
  linkUrl,
  match,
  main,
}) => (
  <ProductItemInfoContainer>
    <ContentContainer>
      <MainTextContainer>{main}</MainTextContainer>
      <ContentTitle textColor={textColor}>{title}</ContentTitle>
      <ContentSubtitle>{subtitle}</ContentSubtitle>
      <CustomButton onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {button}
      </CustomButton>
    </ContentContainer>
  </ProductItemInfoContainer>
);

export default withRouter(ProductItemInfo);
