import { getTransactions } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface TransactionItem {
  time: number;
  match_id: string;
  match_amount: string;
  price: string;
}

export default function useFetchTransactions<
  TQueryFnData = unknown,
  TError = AxiosError
>(id: string) {
  return useQuery<TQueryFnData, TError, TransactionItem[]>({
    queryKey: ["transactions", id],
    queryFn: async () => {
      const response = await getTransactions(id);
      return response.data;
    },
    refetchInterval: 3000,
  });
}
