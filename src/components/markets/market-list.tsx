import { useState } from "react";
import Pagination from "../common/pagination";
import MarketCard from "./market-card";
import { MarketItem } from "@/hooks/useFetchMarkets";

const PAGE_SIZE = 10;

interface Props{
    list: MarketItem[]
}

export default function MarketList({ list }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const filterList = () => {
    return list.filter(
      (_, index) =>
        index >= (currentPage - 1) * PAGE_SIZE &&
        index < currentPage * PAGE_SIZE
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {filterList()?.map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-12">
        <Pagination
          currentPage={currentPage}
          changeCurrentPage={setCurrentPage}
          totalCount={list?.length}
          pageSize={PAGE_SIZE}
          siblingCount={1}
        />
      </div>
    </>
  );
}
