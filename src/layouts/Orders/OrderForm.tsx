import { useSession } from "next-auth/react";
import { useState } from "react";
import { api } from "~/utils/api";

export const OrderForm: React.FC = () => {
  const { data: sessionData } = useSession();
  const [event, setEvent] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [requestedPickupDate, setRequestedPickupDate] = useState("");
  const [email, setEmail] = useState(sessionData?.user.email || "");
  const [phoneNumber, setPhoneNumber] = useState("");

  const resetForm = () => {
    setEvent("");
    setQuantity(0);
    setDescription("");
    setRequestedPickupDate("");
  };

  const { refetch: refetchTopics } = api.order.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  const createOrder = api.order.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  return (
    <form className="flex flex-col justify-center gap-5">
      <h1>Order Details</h1>
      <input
        type="text"
        placeholder="Event"
        className="input-bordered input"
        value={event}
        onChange={(e) => {
          setEvent(e.target.value);
        }}
        required
      />
      <textarea
        className="textarea-bordered textarea"
        placeholder="Describe the event and any other details that may be important to your order"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        required
      />
      {/* Create topics */}
      <input
        value={quantity}
        type="number"
        placeholder="Quantity"
        className="input-bordered input"
        onChange={(e) => {
          setQuantity(parseInt(e.target.value));
        }}
        required
      />
      <input type="file" className="file-input-bordered file-input w-full" />

      <input
        value={requestedPickupDate}
        type="date"
        placeholder="Quantity"
        className="input-bordered input"
        onChange={(e) => {
          setRequestedPickupDate(e.target.value);
        }}
        required
      />

      <div className="divider" />

      <h1>Contact Details</h1>
      <input
        value={email}
        type="email"
        placeholder="Email"
        className="input-bordered input"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <input
        type="tel"
        value={phoneNumber}
        className="input-bordered input w-full"
        placeholder="Phone Number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        required
      />
      <button
        className="modal-action"
        onClick={(e) => {
          e.preventDefault();
          createOrder.mutate({
            title: event,
            quantity,
            description,
            requestedPickupDate,
          });
          resetForm();
        }}
      >
        <label htmlFor="submit-order" className="btn">
          Submit Order
        </label>
      </button>
    </form>
  );
};

export default OrderForm;
