import { MarketItem } from "@/hooks/useFetchMarkets";
import { Link } from "react-router";

interface Props {
  market: MarketItem;
}

export default function MarketCard({ market }: Props) {
  return (
    <Link
      to={`/markets/${market.id}`}
      className="rounded-md border border-gray-700 shadow-sm p-4 grid grid-cols-12
     items-center cursor-pointer hover:shadow-sm hover:shadow-gray-500 duration-150"
    >
      <img
        alt={market.title}
        src={market.currency1.image}
        className="w-10 h-10 col-span-2"
      />
      <span className="col-span-4">{market.title}</span>
      <div className="col-span-3">
        <p>{market.price_info.price}</p>
        <p className="text-gray-500 text-sm">
          {market.currency2.code === "IRT" ? "Toman" : "Tether"}
        </p>
      </div>
      <span
        className={`col-span-3 ${
          market.price_info.change > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {market.price_info.change > 0 && "+"}
        {market.price_info.change}%
      </span>
    </Link>
  );
}
