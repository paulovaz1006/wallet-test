import request from 'supertest';
import server from "../../server/";
import { AppDataSource } from '../../../data-source';

afterEach(async () => {
  await AppDataSource.destroy();
});

beforeEach(async () => {
  await AppDataSource.initialize();
});

describe("ExtractRoute", () => {
  it("should extract (GET)", async () => {
    await request(server)
      .get("/extract/1")
      .send({
        params: {
          user_id: "1"
        }
      })
      .expect(200)
  })

  it.only("should return extract (POST)", async () => {
    const extractMock = {
      amount: 1001,
      description: "",
      user_id: "1",
      type_transaction_id: "2"
    }

    await request(server)
      .post('/extract')
      .send(extractMock)
      .expect(200)
  });
});
