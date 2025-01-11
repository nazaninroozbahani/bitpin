import { OrderItem } from "@/hooks/useFetchOrders";

interface Props {
  order: OrderItem;
}

export default function OrderCard({ order }: Props) {
  return (
    <div className="rounded-md border border-gray-700 shadow-sm p-4 grid grid-cols-12 items-center">
      <span className="col-span-4">{order.value}</span>
      <span className="col-span-4">{order.price}</span>
      <span className="col-span-4">{order.remain}</span>
    </div>
  );
}
