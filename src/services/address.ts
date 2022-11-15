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
        "https://api-goerli.etherscan.io/api?module=account&action=balancemulti&apikey=1H9ATRXXC1CQSW23A9VDD65C5M6XXIM3GX&address=" +
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
