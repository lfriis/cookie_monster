export const OrderForm: React.FC = () => {
  return (
    <div className="m-10 flex justify-center">
      <form className="flex w-1/3 flex-col justify-center gap-5">
        <input
          type="text"
          placeholder="Your email address"
          className="input-bordered input"
        />
        <textarea
          className="textarea-bordered textarea"
          placeholder="Order Description"
        />
        <input
          type="text"
          placeholder="Your email address"
          className="input-bordered input"
        />
        <input
          type="file"
          className="file-input-bordered file-input w-full max-w-xs"
        />
        <button className="btn">Submit Order</button>
      </form>
    </div>
  );
};
