const request = require('supertest');
const app = require('../index');

describe('Search Endpoint', () => {
  it('should return filtered results for a valid search query', async () => {
    const response = await request(app).get('/api/users?q=John');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it('should return an empty array for an invalid search query', async () => {
    const response = await request(app).get('/api/users?q=InvalidQuery');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0);
  });

  // Add more test cases for different scenarios.
});
