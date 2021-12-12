export const selectAllProducts = (state) => state.products;

export const selectSelectedProducts = (state) =>
  state.products.filter((products) => products.checked);

export const selectTotalSelectedProducts = (state) =>
  state.products
    .filter((products) => products.checked)
    .reduce((a, b) => a + b.price, 0);
