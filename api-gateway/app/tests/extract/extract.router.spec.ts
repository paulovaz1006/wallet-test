import request from 'supertest';
import server from "../../server/";

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
});
