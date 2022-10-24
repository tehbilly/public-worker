import worker from '../src/index';

test('GET /', async () => {
	const req = new Request('http://falcon', { method: 'GET' });
	const result = await worker.fetch(req);
	expect(result.status).toBe(404);

	const text = await result.text();
	expect(text).toBe('Not Found.');
});

test('GET /ip', async () => {
	const req = new Request('http://falcon/ip', { method: 'GET' });
	const result = await worker.fetch(req);

	expect(result.status).toBe(200);

	const body = await result.json();
	expect(body).toMatchObject({
		ip: null,
		country: null,
		headers: {
			host: null,
		},
	});
});
