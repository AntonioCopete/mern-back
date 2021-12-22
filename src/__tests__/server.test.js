const supertest = require("supertest");
const app = require("../server");

const request = supertest(app);

describe("routes", () => {
  it("returns a 200 response", async () => {
    const res = await request.get("/");

    expect(res.status).toBe(200);
    expect(res.body.data).toBe("hello-mundo");
  });
});
