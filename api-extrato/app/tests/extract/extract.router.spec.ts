import request from 'supertest';
import server from "../../server/";
import { HTTPStatus } from '../../dto';

let app;

beforeEach(() => {
  const port = 5002;

  app = server.listen(port)
});

afterEach(() => {
  app.close();
})

describe("ExtractRoute", () => {
  it("should extract (GET)", async () => {
    await request(app)
      .get("/extract/1")
      .send({
        params: {
          user_id: "1"
        }
      });
  })

  it.only("should return extract (POST)", async () => {
    const extractMock = {
      amount: 1001,
      description: "",
      user_id: "1",
      type_transaction_id: "2"
    }

    await request(app)
      .post('/extract')
      .send(extractMock)
      .expect(HTTPStatus.INTERNAL_SERVER_ERROR)
  });
});
