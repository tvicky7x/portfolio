import staticRoutes from "@/utilities/staticRoutes";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="linkColor pt-[160px] pb-[80px]">
      <p className="text-center">
        Made with ❤️, ☕, and countless commits by{" "}
        <Link href={staticRoutes?.home} className="text-primary-accent">
          T Vicky
        </Link>
      </p>
    </div>
  );
}

export default Footer;
