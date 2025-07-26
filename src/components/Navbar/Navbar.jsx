import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";
import NavbarLink from "./NavbarLink";

function Navbar() {
  const content = getComponentTexts("navbar");

  return (
    <div className="1080:h-[160px] 810:h-[120px] relative h-[100px]">
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 md:top-[30px]">
        <div className="flex gap-x-[18px] rounded-[16px] bg-white/[0.03] px-[20px] py-[6px]">
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
