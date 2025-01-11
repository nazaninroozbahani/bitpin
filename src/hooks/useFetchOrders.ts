import { getOrders, OrderType } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface OrderItem {
  remain: string;
  price: string;
  value: string;
}

interface IData {
  orders: OrderItem[];
}

export default function useFetchOrders<
  TQueryFnData = unknown,
  TError = AxiosError
>(id: string, type: OrderType) {
  return useQuery<TQueryFnData, TError, IData>({
    queryKey: ["orders", id, type],
    queryFn: async () => {
      const response = await getOrders(id, type);
      return response.data;
    },
    refetchInterval: 3000
  });
}
