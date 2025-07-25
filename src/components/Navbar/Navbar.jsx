import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";

function Navbar() {
  const content = getComponentTexts("navbar");

  return (
    <div className="h-[160px] relative">
      <div className="absolute left-1/2 top-[30px] -translate-x-1/2">
        <div className="bg-white/[0.03] rounded-[16px] px-[20px] flex gap-x-[18px]">
          {/* {content.map((item, index) => {
            return;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
