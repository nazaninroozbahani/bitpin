import { OrderItem } from "@/hooks/useFetchOrders";
import { useId } from "react";
import OrderCard from "./order-card";

interface Props {
  list: OrderItem[];
}

export default function OrderList({ list }: Props) {
  const orderId = useId();

  const slicedList = list.slice(0, 10);

  return (
    <>
      <div className="grid grid-cols-12 gap-2 p-4 font-bold text-lg">
        <span className="col-span-4">Value</span>
        <span className="col-span-4">Price</span>
        <span className="col-span-4">Remain</span>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {slicedList.map((order) => (
          <OrderCard key={orderId} order={order} />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-2 p-4 font-bold text-lg">
        <span className="col-span-4">Total value</span>
        <span className="col-span-4">Average Price</span>
        <span className="col-span-4">Total remain</span>
      </div>
      <div className="grid grid-cols-12 gap-2 p-4">
        <span className="col-span-4">
          {slicedList
            .map((item) => item.value)
            .reduce((a, b) => Number(a) + Number(b), 0)}
        </span>
        <span className="col-span-4">
          {slicedList
            .map((item) => item.price)
            .reduce((a, b) => Number(a) + Number(b), 0)/10}
        </span>
        <span className="col-span-4">
          {slicedList
            .map((item) => item.remain)
            .reduce((a, b) => Number(a) + Number(b), 0)}
        </span>
      </div>
    </>
  );
}
