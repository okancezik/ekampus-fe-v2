import { AxiosInstance } from "axios";

export class BaseApi {
  axiosClient: AxiosInstance;
  constructor(axiosClient: AxiosInstance) {
    this.axiosClient = axiosClient;
  }
}
