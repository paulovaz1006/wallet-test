import request from 'supertest';
import server from "../server/";

let app: any;

beforeEach(() => {
  const port = 5002;

  app = server.listen(port)
});

afterEach(() => {
  app.close();
})

describe('POST /user', () => {
  it('should create a new user', async () => {
    const min = 10000000000;
    const max = 99999999999;  
    const cpf = Math.floor(Math.random() * (max - min + 1)) + min;

    const newUser = {
      name: "teste",
      cpf
    }

    await request(app)
      .post('/user')
      .send(newUser)
      .expect(500);
  });
});
