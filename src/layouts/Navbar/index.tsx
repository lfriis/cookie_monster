import { Brand } from "./Brand";
import { Orders } from "./Orders";
import { Menu } from "./Menu";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <Brand />
      <div className="flex-none">
        <Orders />
        <Menu />
      </div>
    </div>
  );
};
