import { Router as RouterExpress } from "express";
import address from "./routes/address";

// guaranteed to get dependencies
export default () => {
  const app = RouterExpress();
  address(app);

  return app;
};
