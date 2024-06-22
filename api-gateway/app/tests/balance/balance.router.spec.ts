import request from "supertest";
import server from "../../server";

describe('/balance', () => {  
  it('should create a new balance (GET)', async () => {
    const payload = {
      params: {
        user_id: '1',
      }
    }

    const response = await request(server).get('/balance/1').send(payload);

    expect(response.statusCode).toEqual(200);
  });

  it('should create a new balance (PUT)', async () => {
    const payload = {
        amount: 200,
    }

    const response = await request(server).put('/balance/1').send(payload);

    expect(response.statusCode).toEqual(200);
  });
});
