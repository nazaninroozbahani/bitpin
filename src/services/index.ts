import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.bitpin.org",
});

export const getMarkets = () => {
  return axiosInstance({
    method: "get",
    url: "/v1/mkt/markets/",
  });
};
