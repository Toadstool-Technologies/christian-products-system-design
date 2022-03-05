const app = require('../server/app.js');
const supertest = require('supertest');
const request = supertest(app);

it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
});

test('Should successfully send a GET request', async () => {
  try {
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
  } catch (err) {
    console.log('catching')
  }
});