import React from "react";

function Para({ para, className }) {
  return (
    <p
      className={`text-[16px] lg:text-[18px] leading-[22.4px] lg:leading-[25.2px] ${className}`}
      dangerouslySetInnerHTML={{ __html: para || "" }}
    ></p>
  );
}

export default Para;
