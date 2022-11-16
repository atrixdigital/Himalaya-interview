import { Router, Request, Response, NextFunction } from "express";
import Container from "typedi";
import AddressService from "../../services/address";
import addressesList from "../data/list";

const route = Router();

export default (app: Router) => {
  app.use("/address", route);
  const addressServiceInstance = Container.get(AddressService);

  route.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      // take max of 100 addresses and make api call
      const addresses = Array.from(addressesList).slice(0, 100);

      // EtherScan MultiBalance API is limited to 20 addresses, so we need to split the array and make multiple calls
      const chunksize = 20;
      const chunks: any = [];

      // split the array into chunks
      addresses.forEach((item) => {
        if (!chunks.length || chunks[chunks.length - 1].length == chunksize)
          chunks.push([]);
        chunks[chunks.length - 1].push(item);
      });

      // make multiple calls to EtherScan API
      const promises = chunks.map((chunk) => {
        return addressServiceInstance.getAddressesWithBalance(chunk);
      });

      // wait for all the promises to resolve
      const results = await (
        await Promise.all(promises)
      ).map((i) => {
        return i.result;
      });

      // flatten the array to get the final result
      const finalResult = results.flat();

      // return the final result alongside the total balance
      return res.status(200).json({
        addresses: finalResult,
        totalBalance: finalResult.reduce(
          (a: any, b: any) => Number(a) + Number(b.balance),
          0
        ),
      });
    } catch (e) {
      return next(e);
    }
  });
};
