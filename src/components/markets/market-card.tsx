import { MarketItem } from "@/hooks/useFetchMarkets";

interface Props{
    market: MarketItem
}

export default function MarketCard({market}: Props) {
  return (
    <div className="rounded-md shadow-sm p-4">
      <span>{market.title}</span>
    </div>
  );
}
