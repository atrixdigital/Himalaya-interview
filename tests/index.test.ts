import "reflect-metadata";
import supertest from "supertest";
import express from "express";

import expressServer from "../src/lib/express";

const app: express.Application = express();
beforeAll(async () => {
  await expressServer({ app: app });
});

describe("Check Server Status", () => {
  it("should return 200 OK", () => {
    return supertest(app)
      .get("/status")
      .expect(200)
      .then((response) => {
        expect(response.body.status).toBe("OK! Server is working 100%  🔥");
      });
  });
});

describe("GET /Address", () => {
  it("Address Length Should be less 100", () => {
    return supertest(app)
      .get("/api/address")
      .expect(200)
      .then((response) => {
        console.log("response", response.body.addresses.length);
        expect(response.body.addresses.length).toBeLessThan(100);
      });
  });

  it("Total Balance should be correct", () => {
    return supertest(app)
      .get("/api/address")
      .expect(200)
      .then((response) => {
        console.log("response", response.body.addresses);
        console.log("response", response.body.totalBalance);
        const balanceCalculate = response.body.addresses.reduce(
          (a: any, b: any) => Number(a) + Number(b.balance),
          0
        );
        console.log("balance", balanceCalculate);

        expect(response.body.totalBalance).toEqual(balanceCalculate);
      });
  });
});
