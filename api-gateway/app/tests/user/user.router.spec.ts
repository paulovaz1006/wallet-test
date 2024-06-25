import request from 'supertest';
import server from "../../server/";

describe('POST /user', () => {
  it('should create a new user', async () => {
    const newUser = {
      name: "teste",
      cnpj: 111111,
    }

    const response = await request(server).post('/user').send(newUser);
    
    expect(response.statusCode).toEqual(200);
  });
});
