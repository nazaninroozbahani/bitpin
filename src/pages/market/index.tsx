import Spinner from "@/components/common/spinner";
import Tab from "@/components/common/tab";
import OrderList from "@/components/market-details/order-list";
import TransactionList from "@/components/market-details/transaction-list";
import useFetchOrders from "@/hooks/useFetchOrders";
import useFetchTransactions from "@/hooks/useFetchTransactions";
import { useState } from "react";
import { useParams } from "react-router";

export default function Market() {
  const { id } = useParams();

  const {
    isPending: isSellPending,
    isError: isSellError,
    data: sellData,
    error: sellError,
  } = useFetchOrders(id ?? "", "sell");
  const {
    isPending: isBuyPending,
    isError: isBuyError,
    data: buyData,
    error: buyError,
  } = useFetchOrders(id ?? "", "buy");
  const {
    isPending: isTransactionsPending,
    isError: isTransactionsError,
    data: transactionsData,
    error: transactionsError,
  } = useFetchTransactions(id ?? "");
  const [activeTab, setActiveTab] = useState(1);

  const onTabChange = (tab: number) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: 1,
      title: "Sell orders",
      content: <OrderList list={sellData ? sellData.orders : []} />,
    },
    {
      id: 2,
      title: "Buy orders",
      content: <OrderList list={buyData ? buyData.orders : []} />,
    },
    {
      id: 3,
      title: "Transactions",
      content: (
        <TransactionList
          list={transactionsData ? transactionsData : []}
        />
      ),
    },
  ];

  if (isSellPending || isBuyPending || isTransactionsPending) {
    return (
      <section className="flex min-h-[80vh] items-center justify-center">
        <Spinner
          size={44}
          background="#0051FF"
          forground="#0051FF33"
          className="me-4"
        />
      </section>
    );
  }

  if (isSellError) {
    return <span>Error: {sellError.message}</span>;
  }

  if (isBuyError) {
    return <span>Error: {buyError.message}</span>;
  }

  if (isTransactionsError) {
    return <span>Error: {transactionsError.message}</span>;
  }

  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className="text-4xl font-bold">Market Details</h1>
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
