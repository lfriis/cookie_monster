import Head from "next/head";
import { type Order } from "@prisma/client";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { ChatWindow, ChatBar } from "~/features/orders/Chat";
import { OrderStats } from "~/features/orders/Details";
import { OrderSidebar } from "~/layouts/Orders/OrderSidebar";
import { EditableInput } from "~/components/EditableInput";
import { api } from "~/utils/api";

type EditableInput = Pick<Order, "id" | "title" | "description">;

const Orders: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: orders } = api.order.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(
    (orders && orders[0]) || null
  );
  const [title, setTitle] = useState(selectedOrder?.title || "");
  const [description, setDescription] = useState(
    selectedOrder?.description || ""
  );

  const { refetch: refetchOrder } = api.order.getOrder.useQuery(
    { id: selectedOrder?.id },
    {
      enabled: sessionData?.user !== undefined,
    }
  );

  const updateOrder = api.order.update.useMutation({
    onSuccess: () => {
      void refetchOrder();
    },
  });

  const trpcUpdateOrder = () => {
    const noTitleChange = title === selectedOrder?.title;
    const noDescriptionChange = description === selectedOrder?.description;
    if (!selectedOrder || noTitleChange || noDescriptionChange) return;

    updateOrder.mutate({
      id: selectedOrder.id,
      title,
      description,
    });
  };

  return (
    <>
      <Head>
        <title>Crumbs {">"} Orders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="drawer-mobile drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center gap-10 p-5">
            <EditableInput
              value={title}
              setState={setTitle}
              update={trpcUpdateOrder}
            >
              <h1>{selectedOrder?.title}</h1>
            </EditableInput>
            <EditableInput
              value={description}
              setState={setDescription}
              update={trpcUpdateOrder}
            >
              <h4>{selectedOrder?.description}</h4>
            </EditableInput>
            <div>
              <div className="badge-primary badge">birthday</div>
              <div className="badge-primary badge">starwars</div>
              <div className="badge-primary badge">kids</div>
            </div>
            <OrderStats selectedOrder={selectedOrder} />
            <ChatWindow />
            <ChatBar />
          </div>
          <OrderSidebar
            orders={orders}
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </div>
      </main>
    </>
  );
};

export default Orders;
