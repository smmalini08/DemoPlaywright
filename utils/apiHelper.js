export async function apiRequest(request, method, endpoint, data = null) {
    const response = await request[method](endpoint, {
        data: data ? JSON.stringify(data) : undefined,
        headers: { 'Content-Type': 'application/json' }
    });
    return response;
}
