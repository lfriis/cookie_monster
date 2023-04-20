/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from "next-auth/react";

export const Menu: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="dropdown-end dropdown">
      <div>
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <img
              height={50}
              width={50}
              src={sessionData?.user?.image ?? ""}
              alt={sessionData?.user?.name ?? ""}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">{sessionData?.user.name}</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li onClick={() => void signOut()}>
            <a>Log out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
