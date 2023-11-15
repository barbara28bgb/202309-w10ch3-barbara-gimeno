import type { Response, Request } from "express";
import PingController from "./pingController";

describe("Given a pingController", () => {
  describe("When it receives a response", () => {
    test("Then it sould call the method json", () => {
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnValue({ json: jest.fn() }),
        json: jest.fn(),
      };

      const pingController = new PingController();

      pingController.getPong(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
