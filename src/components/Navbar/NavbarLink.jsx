import React from "react";
import IconProvider from "../UtilityComponents/IconProvider";
import staticRoutes from "@/utilities/staticRoutes";

function NavbarLink({ name, icon, link }) {
  return (
    <a
      href={staticRoutes[link]}
      title={name}
      className="p-[8px] text-white group relative"
    >
      <IconProvider icon={icon} />
      <span className="absolute left-1/2 group-hover:bottom-[-30px] bottom-0 -translate-x-1/2 text-[12px] py-[2px] px-[10px] rounded-[14px] bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
        {name}
      </span>
    </a>
  );
}

export default NavbarLink;
