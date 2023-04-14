import { ShoppingCartSVG } from "~/assets";

export const Orders: React.FC = () => {
  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <ShoppingCartSVG />
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">8 Orders</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn-primary btn-block btn">View Orders</button>
          </div>
        </div>
      </div>
    </div>
  );
};
