import { test, expect } from '@playwright/test';

test('GET - Fetch Product List', async ({ request }) => {
    const response = await request.get('/products');

    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);
});
