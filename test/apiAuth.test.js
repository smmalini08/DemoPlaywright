import { test, expect } from '@playwright/test';
import testData from '../fixtures/testData.json';

test('POST - User Login', async ({ request }) => {
    const response = await request.post('/auth/login', {
        data: testData.user,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('token'); // Check if token is returned
});
