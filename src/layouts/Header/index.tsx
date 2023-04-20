import { Brand } from "./Brand";
import { Orders } from "./Orders";
import { Notifications } from "./Notifications";
import { Menu } from "./Menu";
import { SubmitOrder } from "./SubmitOrder";

export const Header: React.FC = ({}) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <Brand />
        <div className="flex-none">
          <SubmitOrder />
          <Orders />
          <Notifications />
          <Menu />
        </div>
      </div>
    </>
  );
};
