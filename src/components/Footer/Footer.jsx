import staticRoutes from "@/utilities/staticRoutes";
import React from "react";

function Footer() {
  return (
    <div className="pt-[160px] linkColor pb-[80px] ">
      <p className="text-center">
        Made by <a href="#">T Vicky</a> | Powered by{" "}
        <a href={staticRoutes?.vercel} target="_blank">
          Vercel
        </a>
      </p>
    </div>
  );
}

export default Footer;
