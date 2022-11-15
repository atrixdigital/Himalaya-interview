export interface IAddress {
  account: string;
  balance: number | string;
}

export interface IAddressResponse {
  status: string;
  message: string;
  result: Array<IAddress> | string;
}
