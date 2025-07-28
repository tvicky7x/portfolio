import staticRoutes from "@/utilities/staticRoutes";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="linkColor pt-[160px] pb-[80px]">
      <p className="text-center">
        <span className="text-nowrap">Made with ❤️, ☕, and</span>{" "}
        <span className="text-nowrap">
          countless commits by{" "}
          <Link href={staticRoutes?.home} className="text-primary-accent">
            T Vicky
          </Link>
        </span>
      </p>
    </div>
  );
}

export default Footer;
