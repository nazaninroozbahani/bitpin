import Spinner from "@/components/common/spinner";
import Tab from "@/components/common/tab";
import MarketList from "@/components/markets/market-list";
import useFetchMarkets from "@/hooks/useFetchMarkets";
import { useState } from "react";

export default function Markets() {
  const { isPending, isError, data, error } = useFetchMarkets();
  const [activeTab, setActiveTab] = useState(1);

  const onTabChange = (tab: number) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: 1,
      title: "Toman base",
      content: (
        <MarketList
          list={
            data
              ? data.results.filter((market) => market.currency2.code === "IRT")
              : []
          }
        />
      ),
    },
    {
      id: 2,
      title: "Tether base",
      content: (
        <MarketList
          list={
            data
              ? data.results.filter(
                  (market) => market.currency2.code === "USDT"
                )
              : []
          }
        />
      ),
    },
  ];

  if (isPending) {
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

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className="text-4xl font-bold">Markets</h1>
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
