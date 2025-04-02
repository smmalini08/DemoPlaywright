import { test, expect } from '@playwright/test';

test('DELETE - Remove Product', async ({ request }) => {
    const response = await request.delete('/products/1');
    expect(response.status()).toBe(200);
});
