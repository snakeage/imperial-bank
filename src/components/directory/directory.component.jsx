import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectDirectorySections,
  selectDirectoryProducts,
  selectDirectoryProductsInfo
} from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import ProductItem from '../product-item/product-item.component';
import ProductItemInfo from '../product-item-info/product-item-info.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections, products, productsInfo }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
    {products.map(({ id, ...otherSectionProps }) => (
      <ProductItem key={id} {...otherSectionProps} />
    ))}
    {productsInfo.map(({ id, ...otherSectionProps }) => (
      <ProductItemInfo key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  products: selectDirectoryProducts,
  productsInfo: selectDirectoryProductsInfo,

});

export default connect(mapStateToProps)(Directory);
