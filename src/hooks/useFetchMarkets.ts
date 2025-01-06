import { getMarkets } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface MarketItem {
  id: number;
  title: string;
  currency2: {
    code: "IRT" | "USDT"
  }
}

interface IData {
  count: number;
  results: MarketItem[];
}

export default function useFetchMarkets<
  TQueryFnData = unknown,
  TError = AxiosError
>() {
  return useQuery<TQueryFnData, TError, IData>({
    queryKey: ["markets"],
    queryFn: async () => {
      const response = await getMarkets();
      return response.data;
    },
  });
}