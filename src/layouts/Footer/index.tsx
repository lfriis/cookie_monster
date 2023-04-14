import React from "react";
import { FacebookSVG, InstagramSVG } from "~/assets";

export const Footer: React.FC = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <footer className="footer footer-center absolute bottom-0 rounded bg-base-200 p-10 text-base-content">
      <div className="grid grid-flow-col gap-4">
        <a className="link-hover link">Gallery</a>
        <a className="link-hover link">About us</a>
        <a className="link-hover link">Contact</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            onClick={() => {
              openInNewTab(
                "https://instagram.com/crumbscookies2020?igshid=YmMyMTA2M2Y="
              );
            }}
          >
            <InstagramSVG />
          </a>
          <a
            onClick={() => {
              openInNewTab(
                "https://www.facebook.com/profile.php?id=100063548412479&sk=reviews"
              );
            }}
          >
            <FacebookSVG />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Crumbs Cookie Co. 2023</p>
      </div>
    </footer>
  );
};
