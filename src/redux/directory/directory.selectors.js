import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (direсtory) => direсtory.sections
);
export const selectDirectoryProducts = createSelector(
  [selectDirectory],
  (direсtory) => direсtory.products
);
export const selectDirectoryProductsInfo = createSelector(
  [selectDirectory],
  (direсtory) => direсtory.productsInfo
);
