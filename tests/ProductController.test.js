const ProductService = require('../api/services/ProductService');

test('Product name should be Apple', () => {
    let prod = ProductService.getProducts();
    console.log('===========prod=============' + JSON.stringify(prod));

    expect(prod.name).toBe('Apple');
});

test('Product category should be Fruit', () => {
    let item = ProductService.getCategories();
    console.log('===========item=============' + JSON.stringify(item));

    expect(item.name).toBe('Fruit');
});