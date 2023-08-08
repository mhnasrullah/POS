import axios from "axios";

const instance = () => {
  return axios.create({
    baseURL: "https://tes-mobile.landa.id/api",
  });
}

export default instance()