import staticRoutes from "@/utilities/staticRoutes";
import React from "react";

function Footer() {
  return (
    <div className="linkColor pt-[160px] pb-[80px]">
      <p className="text-center">
        Made by{" "}
        <a href="#" className="text-primary-accent">
          T Vicky
        </a>{" "}
        | Powered by{" "}
        <a
          href={staticRoutes?.vercel}
          target="_blank"
          className="text-primary-accent"
        >
          Vercel
        </a>
      </p>
    </div>
  );
}

export default Footer;
