import { TransactionItem } from "@/hooks/useFetchTransactions";

interface Props {
  transaction: TransactionItem;
}

export default function TransactionCard({ transaction }: Props) {
  return (
    <div className="rounded-md border border-gray-700 shadow-sm p-4 grid grid-cols-12 items-center">
      <span className="col-span-4">{transaction.match_amount}</span>
      <span className="col-span-4">{transaction.price}</span>
      <span className="col-span-4">{new Date(transaction.time).toLocaleTimeString("en-US")}</span>
    </div>
  );
}
