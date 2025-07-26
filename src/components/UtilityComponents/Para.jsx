import React from "react";

function Para({ para, className }) {
  return (
    <p
      className={`text-center text-[16px] leading-[22.4px] lg:text-start lg:text-[18px] lg:leading-[25.2px] ${className}`}
      dangerouslySetInnerHTML={{ __html: para || "" }}
    ></p>
  );
}

export default Para;
