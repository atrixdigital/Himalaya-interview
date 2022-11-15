import { Router as RouterExpress } from "express";

import config from "../config";
import address from "./routes/address";
// import auth from "./routes/auth";

// guaranteed to get dependencies
export default () => {
  const app = RouterExpress();
  address(app);
  //   auth(app);
  // user(app);
  // shop(app);
  return app;
};
