import { type Order } from "@prisma/client";

interface Props {
  orders: Order[] | undefined;
  selectedOrder: Order | null;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}

export const OrderSidebar: React.FC<Props> = ({
  orders,
  selectedOrder,
  setSelectedOrder,
}) => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu rounded-box w-56 bg-base-100 p-2">
        {orders?.map((order) => (
          <li
            key={order.id}
            onClick={() => {
              setSelectedOrder(order);
            }}
          >
            <a className={selectedOrder?.id === order.id ? "btn-primary" : ""}>
              {order.title}
              <span className="badge">{order.status}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
