import axios from "./Api";

export default class ApiRequest {
  static get = async (endpoint, params) => {
    return new Promise(async (res, rej) => {
      try {
        let data = await axios.get(endpoint, { params });
        res(data);
      } catch (err) {
        rej(err);
      }
    });
  };
}
