import { type Order } from "@prisma/client";

interface Props {
  selectedOrder: Order | null;
}

export const OrderStats: React.FC<Props> = ({ selectedOrder }) => {
  return (
    <div className="stats w-full text-primary-content shadow">
      <div className="stat">
        <div className="stat-title">Cookies Ordered</div>
        <div className="stat-value">{selectedOrder?.quantity}</div>
        <div className="stat-desc text-secondary">
          {selectedOrder?.orderDate?.toDateString()}
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-title">Estimated Pickup Date</div>
        <div className="stat-value">4 Days</div>
        <div className="stat-desc text-secondary">
          {selectedOrder?.pickupDate?.toDateString()}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Order Status</div>
        <span className="badge">{selectedOrder?.status}</span>
      </div>
    </div>
  );
};
