import { OrderItem } from "@/hooks/useFetchOrders";
import { useId } from "react";
import OrderCard from "./order-card";

interface Props {
  list: OrderItem[];
}

export default function OrderList({ list }: Props) {
  const orderId = useId();

  return (
    <>
      <div className="grid grid-cols-12 gap-2 p-4 font-bold text-lg">
        <span className="col-span-4">Value</span>
        <span className="col-span-4">Price</span>
        <span className="col-span-4">Remain</span>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {list.slice(0, 10).map((order) => (
          <OrderCard key={orderId} order={order} />
        ))}
      </div>
    </>
  );
}
