import { IAddress, IAddressResponse } from "./../interfaces/IAddress";
import { Service, Inject } from "typedi";

import axios from "axios";

@Service()
export default class AddressService {
  constructor() {}

  public async getAddressesWithBalance(
    addresses: Array<string>
  ): Promise<IAddressResponse> {
    const config = {
      method: "get",
      url:
        `${process.env.ETHERSCAN_API_URL}?module=account&action=balancemulti&apikey=${process.env.ETHERSCAN_API_KEY}&address=` +
        addresses.join(","),
      headers: {},
    };

    return await axios(config)
      .then(function (response) {
        // console.log("response", JSON.stringify(response.data));
        return { ...response.data };
      })
      .catch(function (error) {
        console.log(error);
        return { response: error };
      });
  }
}
