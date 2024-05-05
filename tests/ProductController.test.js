const ProductService = require('../api/services/ProductService');

test('Product name should be Apple', () => {
    let prod = ProductService.getProducts();
    console.log('===========prod=============' + JSON.stringify(prod));

    expect(prod.name).toBe('Apple');
});