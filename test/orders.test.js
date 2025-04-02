import { test, expect } from '@playwright/test';

test('POST - Place Order', async ({ request }) => {
    const orderData = {
        userId: 1,
        date: "2025-03-19",
        products: [{ productId: 3, quantity: 2 }]
    };

    const response = await request.post('/carts', { data: orderData });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('id');
    expect(responseBody.products[0].quantity).toBe(2);
});
