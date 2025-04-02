import { test, expect } from '@playwright/test';
import testData from '../fixtures/testData.json';

test('POST - Create New Product', async ({ request }) => {
    const response = await request.post('/products', {
        data: testData.newProduct,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('id');  // Ensure an ID is returned
    expect(responseBody.title).toBe(testData.newProduct.title);
});
