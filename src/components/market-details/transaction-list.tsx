import { TransactionItem } from "@/hooks/useFetchTransactions";
import TransactionCard from "./transaction-card";

interface Props {
  list: TransactionItem[];
}

export default function TransactionList({ list }: Props) {

  return (
    <>
      <div className="grid grid-cols-12 gap-2 p-4 font-bold text-lg">
        <span className="col-span-4">Match amount</span>
        <span className="col-span-4">Price</span>
        <span className="col-span-4">Time</span>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {list.slice(0, 10).map((transaction) => (
          <TransactionCard key={transaction.match_id} transaction={transaction} />
        ))}
      </div>
    </>
  );
}
