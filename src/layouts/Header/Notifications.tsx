import { useState } from "react";
import { NotificationsSVG } from "~/assets";

export const Notifications: React.FC = () => {
  const [openStack, setOpenStack] = useState(false);

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <NotificationsSVG />
          <span className="badge-primary badge badge-xs indicator-item"></span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card-compact card dropdown-content mt-3 w-52 bg-base-100 shadow"
      >
        <div
          className={openStack ? "stack" : ""}
          onClick={() => {
            setOpenStack(!openStack);
          }}
        >
          <div className="card bg-primary text-primary-content shadow-md">
            <div className="card-body">
              <h2 className="card-title">Notifications</h2>
              <p>
                You have 3 unread messages from the Crumbs team. Tap here to
                see.
              </p>
            </div>
          </div>
          <div className="card bg-primary text-primary-content shadow">
            <div className="card-body">
              <h2 className="card-title">Notification 2</h2>
              <p>
                You have 3 unread messages from the Crumbs team. Tap here to
                see.
              </p>
            </div>
          </div>
          <div className="card bg-primary text-primary-content shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Notification 3</h2>
              <p>
                You have 3 unread messages from the Crumbs team. Tap here to
                see.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
