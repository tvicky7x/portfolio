import React from "react";

function MainLayout({
  children,
  outerClassName,
  innerClassName,
  outerStyle,
  innerStyle,
}) {
  return (
    <div className={` ${outerClassName}`} style={outerStyle}>
      <div
        className={`mx-auto max-w-[810px] px-[20px] md:px-[40px] lg:max-w-[1140px] 2xl:px-0 ${innerClassName}`}
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
