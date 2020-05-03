import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import {
  ProductItemContainer,
  ImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './product-item.styles';

const ProductItem = ({
  title,
  subtitle,
  button,
  imageUrl,
  textColor,
  history,
  linkUrl,
  match,
}) => (
  <ProductItemContainer>
  <ContentContainer>
  <ImageContainer src={imageUrl} alt="item" />
      <ContentTitle textColor={textColor}>{title}</ContentTitle>
      <ContentSubtitle>{subtitle}</ContentSubtitle>
      <CustomButton onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {button}
      </CustomButton>
    </ContentContainer>
  </ProductItemContainer>
);

export default withRouter(ProductItem);
