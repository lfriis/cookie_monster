import Head from "next/head";
import { type Order } from "@prisma/client";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { ChatWindow, ChatBar } from "~/features/orders/Chat";
import { OrderStats } from "~/features/orders/Details";
import { OrderSidebar } from "~/layouts/Orders/OrderSidebar";
import { api } from "~/utils/api";

const Orders: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: orders } = api.order.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(
    (orders && orders[0]) || null
  );

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
            <h1>{selectedOrder?.title}</h1>
            <h4>{selectedOrder?.description}</h4>
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
