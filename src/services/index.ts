import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.bitpin.org",
});

export type OrderType = "sell" | "buy";

export const getMarkets = () => {
  return axiosInstance({
    method: "get",
    url: "/v1/mkt/markets/",
  });
};

export const getOrders = (id: string, type: OrderType) => {
  return axiosInstance({
    method: "get",
    url: `/v2/mth/actives/${id}/?type=${type}`,
  });
};


export const getTransactions = (id: string) => {
  return axiosInstance({
    method: "get",
    url: `/v1/mth/matches/${id}/`,
  });
};