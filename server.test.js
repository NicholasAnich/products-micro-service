const supertest = require('supertest');
const expect = require('expect');
const app = require('./server/index')
const db = require('./server/database/db')

const request = supertest(app)
const endpoint = "/api/products"

describe(endpoint, () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
  });

  describe("GET /api/products", async () => {
    // const products = ["p1", "p2"];
    // const product = products.map((product) => ({
    //   product,
    // }));

    const productsResponse = await request.get(endpoint) ;

    expect(productsResponse.status).toBe(200);

  })
})

// describe("GET /api/products", () => {
//   describe("should successfully get all products from /products endpoint", () => {
//     test("should respond with a 200 status code", async () => {
//       const response = await request(app).get("/api/products");
//       expect(response.statusCode).toBe(200)
//     });

//   });

// });
