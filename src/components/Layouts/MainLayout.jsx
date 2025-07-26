import React from "react";

function MainLayout({
  children,
  outerClassName,
  innerClassName,
  outerStyle,
  innerStyle,
}) {
  return (
    <div className={`px-[20px] ${outerClassName}`} style={outerStyle}>
      <div
        className={`max-w-none md:max-w-[750px] lg:max-w-[1140px] mx-auto ${innerClassName}`}
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
