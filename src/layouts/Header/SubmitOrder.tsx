import { OrderForm } from "../Orders/OrderForm";

export const SubmitOrder: React.FC = () => {
  return (
    <div>
      <label htmlFor="submit-order" className="btn">
        Submit Order
      </label>

      <input type="checkbox" id="submit-order" className="modal-toggle" />
      <div className="modal modal-bottom md:modal-middle">
        <div className="modal-box">
          <OrderForm />
        </div>
      </div>
    </div>
  );
};
