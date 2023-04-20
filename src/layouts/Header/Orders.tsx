import { useSession } from "next-auth/react";
import Link from "next/link";
import { ShoppingCartSVG } from "~/assets";
import { api } from "~/utils/api";

export const Orders: React.FC = () => {
  const { data: sessionData } = useSession();
  const { data: orders } = api.order.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  const totalOrders = orders?.length || 0;

  return (
    <Link href={"/orders"}>
      <label tabIndex={totalOrders} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <ShoppingCartSVG />
          <span className="badge badge-sm indicator-item">{totalOrders}</span>
        </div>
      </label>
    </Link>
  );
};
