import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";
import NavbarLink from "./NavbarLink";

function Navbar() {
  const content = getComponentTexts("navbar");

  return (
    <div className="h-[100px] md:h-[120px] lg:h-[160px] relative">
      <div className="absolute left-1/2 top-[20px] md:top-[30px] -translate-x-1/2">
        <div className="bg-white/[0.03] rounded-[16px] py-[6px] px-[20px] flex gap-x-[18px]">
          {content?.navbarList?.map((item, index) => {
            return (
              <NavbarLink
                key={index}
                name={item.name}
                icon={item.icon}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
